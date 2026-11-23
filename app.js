const $=s=>document.querySelector(s),A=$("#app"),T={ss1:"SS1",ss2:"SS2",ss3:"SS3"},BK='<button data-a="home">⌂ All topics</button>';
let S={n:"",c:"ss1",fs:18,th:"",sp:0,d:{},lic:""},L={ok:0,msg:"No licence key yet. Demo topics are open."},cur={},tm;
try{Object.assign(S,JSON.parse(localStorage.getItem("emac")||"{}"))}catch(e){}
const sv=()=>{try{localStorage.setItem("emac",JSON.stringify(S))}catch(e){}},
esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),
b64=s=>Uint8Array.from(atob(s.replace(/-/g,"+").replace(/_/g,"/")),c=>c.charCodeAt(0)),
meta=k=>{const[c,t,w]=k.split("-");return CUR[c][t].find(x=>x[0]==w)},
can=k=>L.ok||(C[k]&&C[k].free),
view=h=>{clearInterval(tm);A.innerHTML=h;const f=A.querySelector("h1");f&&(f.tabIndex=-1,f.focus());scrollTo(0,0)};
function apply(){const r=document.documentElement;r.style.fontSize=S.fs+"px";S.th?r.dataset.theme=S.th:delete r.dataset.theme;r.dataset.sp=S.sp}
async function chk(k){try{const[p,s]=k.trim().split("."),response=await fetch("pub.json");if(!response.ok)return{ok:0,msg:"Licence verification is not configured: the public key file is missing."};const pub=await response.json(),key=await crypto.subtle.importKey("jwk",pub,{name:"ECDSA",namedCurve:"P-256"},false,["verify"]);
if(!await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},key,b64(s),b64(p)))return{ok:0,msg:"That licence key is not valid."};
const d=JSON.parse(new TextDecoder().decode(b64(p)));
if(new Date(d.exp+"T23:59:59")<new Date())return{ok:0,msg:d.school+": licence expired on "+d.exp+". Ask for a renewal key."};
return{ok:1,msg:d.school+" · licensed until "+d.exp}}catch(e){return{ok:0,msg:"Could not check the key."}}}
function home(){view(`<h1>Digital Technologies</h1><p class="lic">${esc(L.msg)}</p><div class="row">${Object.keys(T).map(c=>`<button data-a="cls" data-v="${c}" aria-pressed="${S.c==c}">${T[c]}</button>`).join("")}<button data-a="cbt">⏱ CBT practice</button><button data-a="teach">Teacher view</button></div>${[1,2,3].map(t=>`<h2>Term ${t}</h2><ul class="ls">${CUR[S.c][t].map(([w,n,b])=>{const k=`${S.c}-${t}-${w}`;return`<li><button class="lb" data-a="topic" data-k="${k}"><b>${can(k)?"":"🔒 "}Week ${w}: ${esc(n)}</b><small>${esc(b)}</small></button></li>`}).join("")}</ul>`).join("")}`)}
const qh=(q,i)=>`<div class="q"><span class="tag">${q.t}</span><p><b>${esc(q.q)}</b></p>${q.o?q.o.map((o,j)=>`<button class="opt" data-a="ans" data-i="${i}" data-j="${j}">${esc(o)}</button>`).join("")+'<p class="fb" role="status"></p>':`<details><summary>Show model answer</summary><p>${esc(q.e)}</p></details>`}</div>`,
tool=()=>'<div class="tool"><h3>Number converter</h3><input id="num" type="number" min="0" inputmode="numeric" aria-label="Decimal number"> <button data-a="conv">Convert</button><p id="out" role="status"></p></div>';
function topic(k,tab="n"){const m=meta(k),c=C[k];cur={k};
if(!can(k))return view(`${BK}<h1>${esc(m[1])}</h1><p>This topic needs your school’s licence key. Add it in Settings.</p>`);
let h;if(!c)h="<p>Notes, questions and practicals for this topic arrive in the next update.</p>";
else if(tab=="n")h=c.n.map(([a,b])=>`<h3>${esc(a)}</h3><p>${esc(b)}</p>`).join("")+'<button data-a="say">🔊 Listen</button>';
else if(tab=="q")h=c.q.map(qh).join("");
else h=`<ol>${c.p.s.map(x=>`<li>${esc(x)}</li>`).join("")}</ol><h3>Marking checklist</h3>${c.p.c.map(x=>`<label class="ck"><input type="checkbox" style="width:auto"> ${esc(x)}</label>`).join("")}${c.p.r?`<h3>Performance rubric</h3><p>Use the level descriptions to judge the evidence produced. A paper or simulator alternative is assessed as that type of evidence, not as a completed physical build.</p><div class="rubric-wrap" role="region" aria-label="Practical assessment rubric" tabindex="0"><table class="rubric"><thead><tr><th scope="col">Criterion</th><th scope="col">Not yet demonstrated</th><th scope="col">Developing</th><th scope="col">Competent</th></tr></thead><tbody>${c.p.r.map(r=>`<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map(v=>`<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`:""}${c.p.t?tool():""}`;
view(`${BK}<h1>${esc(m[1])}</h1><div class="row">${[["n","Notes"],["q","Practice"],["p","Practical"]].map(([a,l])=>`<button data-a="tab" data-v="${a}" data-k="${k}" aria-pressed="${tab==a}">${l}</button>`).join("")}</div><section class="card">${h}</section>`)}
function ans(b,d){const i=+d.i,j=+d.j,q=C[cur.k].q[i],r=j==q.a,o=S.d[cur.k]=S.d[cur.k]||{};if(!(i in o))o[i]=r?1:0;sv();
const x=b.closest(".q");x.querySelectorAll(".opt").forEach((y,n)=>{y.disabled=true;if(n==q.a)y.classList.add("good");else if(n==j)y.classList.add("bad")});
x.querySelector(".fb").textContent=(r?"✔ Correct. ":"✘ Not quite. The answer is "+q.o[q.a]+". ")+q.e}
function cbt(){const p=[];Object.keys(C).filter(k=>k.startsWith(S.c)&&can(k)).forEach(k=>C[k].q.forEach(q=>q.o&&p.push(q)));
if(!p.length)return view(`${BK}<h1>CBT practice</h1><p>No questions are open for this class yet.</p>`);
cur={cbt:p.sort(()=>Math.random()-.5).slice(0,10),a:[],end:Date.now()+9e5,submitted:false};
view(`${BK}<h1>CBT practice</h1><p>Time left: <b id="tm">15:00</b></p>${cur.cbt.map((q,i)=>`<section class="card"><span class="tag">${q.t}</span><p><b>${i+1}. ${esc(q.q)}</b></p>${q.o.map((o,j)=>`<button class="opt" data-a="pick" data-i="${i}" data-j="${j}" aria-pressed="false">${esc(o)}</button>`).join("")}</section>`).join("")}<button class="pri" data-a="sub">Submit</button>`);
tm=setInterval(()=>{const s=Math.max(0,Math.round((cur.end-Date.now())/1e3));$("#tm").textContent=Math.floor(s/60)+":"+String(s%60).padStart(2,"0");if(!s)sub()},1e3)}
function sub(){if(cur.submitted)return;cur.submitted=true;clearInterval(tm);const attempted=cur.a.filter(x=>Number.isInteger(x)).length,n=cur.cbt.filter((q,i)=>cur.a[i]===q.a).length;S.b=S.b||{a:0,c:0,s:0};S.b.a+=attempted;S.b.c+=n;S.b.s+=1;sv();view(`${BK}<h1>Score: ${n} / ${cur.cbt.length}</h1><p>${attempted} of ${cur.cbt.length} questions attempted. Your CBT result is included in your progress code.</p>${cur.cbt.map((q,i)=>`<section class="card"><p><b>${i+1}. ${esc(q.q)}</b></p><p>${cur.a[i]===q.a?"✔ Correct. ":"✘ The answer is "+esc(q.o[q.a])+". "}${esc(q.e)}</p></section>`).join("")}`)}
const code=()=>btoa(unescape(encodeURIComponent(JSON.stringify({v:3,n:S.n||"Student",c:S.c,d:Object.fromEntries(Object.keys(S.d).map(k=>{const a=Object.values(S.d[k]);return[k,[a.reduce((x,y)=>x+y,0),a.length,C[k]?C[k].q.filter(q=>q.o).length:0]]})),b:S.b||{a:0,c:0,s:0}}))));
function sett(){view(`${BK}<h1>Settings</h1><label>My name<br><input id="nm" value="${esc(S.n)}"></label><div class="row"><b>Text size</b>${[[18,"Normal"],[22,"Big"],[27,"Biggest"]].map(([v,l])=>`<button data-fs="${v}" aria-pressed="${S.fs==v}">${l}</button>`).join("")}</div><div class="row"><b>Colours</b>${["light","soft","dark"].map(v=>`<button data-th="${v}" aria-pressed="${S.th==v}">${v}</button>`).join("")}<button id="sp" aria-pressed="${!!S.sp}">Wide spacing</button></div><label>School licence key<br><textarea id="lk" rows="3">${esc(S.lic)}</textarea></label><p><button class="pri" data-a="lic">Check key</button></p><p class="lic">${esc(L.msg)}</p><h2>My progress code</h2><p>Give this code to your teacher.</p><textarea readonly rows="3">${code()}</textarea>`)}
function teach(){view(`${BK}<h1>Teacher view</h1><p>Paste one student progress code per line.</p><textarea id="codes" rows="6"></textarea><div class="row"><button class="pri" data-a="tres">Show results</button><button data-a="csv">Download CSV</button></div><div id="tr"></div>`)}
const rows=()=>$("#codes").value.split("\n").map(x=>x.trim()).filter(Boolean).map(x=>{try{const o=JSON.parse(decodeURIComponent(escape(atob(x)))),v=Object.values(o.d||{}),r=v.reduce((a,b)=>a+b[0],0),attempted=v.reduce((a,b)=>a+b[1],0),total=v.reduce((a,b)=>a+(o.v>=2?b[2]:b[1]),0),score=o.v>=2?(attempted?Math.round(100*r/attempted)+"%":"-"):(total?Math.round(100*r/total)+"% (legacy)":"-"),b=o.b||{a:0,c:0,s:0};return[o.n,T[o.c]||o.c,v.length,o.v>=2?attempted+"/"+total:"not recorded",score,b.a||0,b.a?Math.round(100*(b.c||0)/b.a)+"%":"-"]}catch(e){return null}}).filter(Boolean);
function tres(){const r=rows();$("#tr").innerHTML=r.length?`<table><tr><th>Name</th><th>Class</th><th>Topics</th><th>Questions attempted</th><th>Practice accuracy</th><th>CBT attempted</th><th>CBT accuracy</th></tr>${r.map(x=>`<tr>${x.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table>`:"<p>No valid codes found.</p>"}
function csv(){const t="Name,Class,Topics,Practice questions attempted,Practice accuracy,CBT questions attempted,CBT accuracy\n"+rows().map(r=>r.map(c=>'"'+String(c).replace(/^[=+\-@]/,"'$&").replace(/"/g,'""')+'"').join(",")).join("\n"),a=document.createElement("a");a.href=URL.createObjectURL(new Blob([t],{type:"text/csv"}));a.download="class-results.csv";a.click()}
document.addEventListener("input",e=>{if(e.target.id=="nm"){S.n=e.target.value;sv()}});
document.addEventListener("click",async e=>{const b=e.target.closest("button");if(!b)return;const d=b.dataset;
if(d.fs){S.fs=+d.fs;apply();sv();return sett()}
if(d.th){S.th=d.th;apply();sv();return sett()}
if(b.id=="sp"){S.sp=S.sp?0:1;apply();sv();return sett()}
switch(d.a){
case"home":home();break;case"gear":sett();break;case"teach":teach();break;case"tres":tres();break;case"csv":csv();break;case"cbt":cbt();break;case"sub":sub();break;
case"cls":S.c=d.v;sv();home();break;
case"topic":topic(d.k);break;case"tab":topic(d.k,d.v);break;case"ans":ans(b,d);break;
case"pick":cur.a[+d.i]=+d.j;b.parentNode.querySelectorAll(".opt").forEach(x=>x.setAttribute("aria-pressed",x==b));break;
case"conv":{const n=Math.floor(+$("#num").value);$("#out").textContent=n>=0?`Binary: ${n.toString(2)} · Octal: ${n.toString(8)} · Hex: ${n.toString(16).toUpperCase()}`:"Type a whole number, 0 or more.";break}
case"say":try{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance($(".card").innerText))}catch(x){}break;
case"lic":S.lic=$("#lk").value.trim();sv();L=await chk(S.lic);sett();break}});
apply();home();
if(S.lic)chk(S.lic).then(r=>{L=r;if(A.querySelector(".lic")&&A.querySelector(".ls"))home()});
if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js");
