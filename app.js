const $=s=>document.querySelector(s),A=$("#app"),T={ss1:"SS1",ss2:"SS2",ss3:"SS3"},BK='<button data-a="home">⌂ All topics</button>';
let S={n:"",c:"ss1",term:1,fs:18,th:"",sp:0,d:{},done:[],best:0,checks:{},lic:""},L={ok:0,msg:"No licence key yet. Demo topics are open."},cur={},tm;
try{Object.assign(S,JSON.parse(localStorage.getItem("emac")||"{}"))}catch(e){}
S.d=S.d||{};S.done=Array.isArray(S.done)?S.done:[];S.best=Number(S.best)||0;S.checks=S.checks&&typeof S.checks==="object"?S.checks:{};
const sv=()=>{try{localStorage.setItem("emac",JSON.stringify(S))}catch(e){}},
esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),
b64=s=>Uint8Array.from(atob(s.replace(/-/g,"+").replace(/_/g,"/")),c=>c.charCodeAt(0)),
meta=k=>{const[c,t,w]=k.split("-");return CUR[c][t].find(x=>x[0]==w)},
can=k=>L.ok||(C[k]&&C[k].free),
view=h=>{clearInterval(tm);A.innerHTML=h;const f=A.querySelector("h1");f&&(f.tabIndex=-1,f.focus());scrollTo(0,0)};
function apply(){const r=document.documentElement;r.style.fontSize=S.fs+"px";S.th?r.dataset.theme=S.th:delete r.dataset.theme;r.dataset.sp=S.sp}
async function chk(k){
try{
const parts=String(k||"").trim().split(".");
if(parts.length!==2||!parts[0]||!parts[1])return{ok:0,msg:"Enter a complete school licence key."};
const response=await fetch("keys.json",{cache:"no-store"});
if(!response.ok)return{ok:0,msg:"Licence verification is not configured: the public keyring is missing."};
const ring=await response.json();
if(!ring||ring.version!==1||!ring.keys||typeof ring.keys!=="object")return{ok:0,msg:"The public licence keyring is invalid."};
const payloadBytes=b64(parts[0]),d=JSON.parse(new TextDecoder().decode(payloadBytes));
let jwk=null;
if(d&&d.v===2&&typeof d.kid==="string"&&d.kid&&typeof d.licenceId==="string"&&d.licenceId&&typeof d.school==="string"&&d.school.trim()&&typeof d.exp==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(d.exp)){
jwk=ring.keys[d.kid];
}else if(d&&typeof d.school==="string"&&typeof d.exp==="string"&&ring.legacyKey){
jwk=ring.legacyKey;
}else return{ok:0,msg:"The licence key has an unsupported or malformed format."};
if(!jwk)return{ok:0,msg:"This licence was issued with an unrecognised key. Contact the school licence administrator."};
const key=await crypto.subtle.importKey("jwk",jwk,{name:"ECDSA",namedCurve:"P-256"},false,["verify"]);
if(!await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},key,b64(parts[1]),payloadBytes))return{ok:0,msg:"That licence key is not valid."};
const expiry=new Date(d.exp+"T23:59:59.999Z");
if(Number.isNaN(expiry.getTime())||expiry.toISOString().slice(0,10)!==d.exp)return{ok:0,msg:"The licence expiry date is invalid."};
if(expiry<new Date())return{ok:0,msg:d.school+": licence expired on "+d.exp+". Ask for a renewal key."};
return{ok:1,msg:d.school+" · licensed until "+d.exp};
}catch(e){return{ok:0,msg:"Could not verify this licence. Check the key and try again."}}
}
function home(){
const keys=Object.keys(C).filter(k=>k.startsWith(S.c+"-")&&can(k)),done=keys.filter(k=>S.done.includes(k)).length;
let right=0,tried=0;keys.forEach(k=>{const a=Object.values(S.d[k]||{});tried+=a.length;right+=a.reduce((x,y)=>x+y,0)});
const pct=tried?Math.round(100*right/tried):null,hour=new Date().getHours(),greeting=hour<12?"Good morning":hour<17?"Good afternoon":"Good evening";
view(`<section class="hero"><p class="eyebrow">✦ eMac Lesson Note</p><h1>${greeting}${S.n?", "+esc(S.n.trim().split(/\s+/)[0]):""}!</h1><p class="hero-sub">Digital Technologies made simple.</p>
<div class="class-switch">${Object.keys(T).map(c=>`<button data-a="cls" data-v="${c}" aria-pressed="${S.c==c}">${T[c]}</button>`).join("")}</div>
<div class="stats-grid"><div class="stat"><span>✓</span><b>${done}/${keys.length}</b><small>Lessons done</small></div><div class="stat"><span>★</span><b>${pct===null?"–":pct+"%"}</b><small>Practice score</small></div><div class="stat"><span>◷</span><b>${S.best?S.best+"%":"–"}</b><small>Best CBT</small></div></div></section>
<div class="home-content"><p class="lic status-note">${esc(L.msg)}</p><button class="cbt-banner" data-a="cbt"><span class="cbt-icon">◷</span><span><b>Start a CBT test</b><small>10 questions · 15 minutes · exam practice</small></span><span class="chev">›</span></button>
<div class="term-switch">${[1,2,3].map(t=>`<button data-term="${t}" aria-pressed="${S.term==t}">Term ${t}</button>`).join("")}</div>
<ul class="lesson-list">${(CUR[S.c][S.term||1]||[]).map(([w,n,b],i)=>{const k=`${S.c}-${S.term||1}-${w}`,hasContent=!!C[k],ready=hasContent&&can(k),locked=hasContent&&!can(k),isDone=S.done.includes(k),status=locked?" · licence required":ready?"":" · coming soon",icon=isDone?"✓":locked?"🔒":ready?w:"·";return `<li style="--i:${i}"><button class="lesson-card" data-a="topic" data-k="${k}"><span class="week-icon ${isDone?"is-done":ready?"is-ready":"is-pending"}">${icon}</span><span class="lesson-copy"><small>Week ${w}${status}</small><b>${esc(n)}</b><span>${esc(b)}</span></span><span class="chev">›</span></button></li>`}).join("")}</ul></div>`);
}
const qh=(q,i)=>`<div class="q"><span class="tag">${q.t}</span><p><b>${esc(q.q)}</b></p>${q.o?q.o.map((o,j)=>`<button class="opt" data-a="ans" data-i="${i}" data-j="${j}">${esc(o)}</button>`).join("")+'<p class="fb" role="status"></p>':`<details><summary>Show model answer</summary><p>${esc(q.e)}</p></details>`}</div>`,
tool=()=>'<div class="tool"><h3>Number converter</h3><input id="num" type="number" min="0" inputmode="numeric" aria-label="Decimal number"> <button data-a="conv">Convert</button><p id="out" role="status"></p></div>';
function topic(k,tab="n"){
cur.tab=tab;const m=meta(k),c=C[k];cur.k=k;
if(!can(k))return view(`<div class="lesson-top"><button data-a="home" class="back-link">‹ All lessons</button></div><h1>${esc(m[1])}</h1><p class="status-note">This topic needs your school’s licence key. Add it in Settings.</p>`);
const [cls,term,week]=k.split("-"),sub=`${T[cls]||cls.toUpperCase()} · Term ${term} · Week ${week}`;
if(!c)return view(`<div class="lesson-top"><button data-a="home" class="back-link">‹ All lessons</button><span class="lesson-meta">${sub}</span></div><h1>${esc(m[1])}</h1><section class="coming-card"><b>Coming soon</b><p>This week covers: ${esc(m[2])}. Full notes arrive in the next update.</p></section>`);
let h;
if(tab=="n")h=`<button class="listen-btn" data-a="say">◖)) Listen to this lesson</button>`+c.n.map(([a,b],i)=>`<section class="lesson-section" style="--i:${i}"><h2>${esc(a)}</h2><p>${esc(b)}</p></section>`).join("")+`<button class="next-btn" data-a="tab" data-v="q" data-k="${k}">Next: practice questions <span>→</span></button>`;
else if(tab=="q")h=c.q.map((q,i)=>qh(q,i)).join("")+`<button class="next-btn" data-a="tab" data-v="p" data-k="${k}">Next: practical <span>→</span></button>`;
else {
const checks=S.checks[k]||[];
const rubric=c.p.r?`<section class="lesson-section"><h2>Performance rubric</h2><p>Use the level descriptions to judge the evidence produced. A paper or simulator alternative is assessed as that type of evidence, not as a completed physical build.</p><div class="rubric-wrap" role="region" aria-label="Practical assessment rubric" tabindex="0"><table class="rubric"><thead><tr><th scope="col">Criterion</th><th scope="col">Not yet demonstrated</th><th scope="col">Developing</th><th scope="col">Competent</th></tr></thead><tbody>${c.p.r.map(r=>`<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map(v=>`<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>` : "";
h=`<section class="lesson-section"><h2>Steps</h2><ol class="steps">${(c.p.s||[]).map((x,i)=>`<li><span>${i+1}</span>${esc(x)}</li>`).join("")}</ol></section>${c.p.t?tool():""}<section class="lesson-section"><h2>Marking checklist</h2>${(c.p.c||[]).map((x,i)=>`<label class="ck"><input type="checkbox" data-k="${k}" data-check="${i}" ${checks.includes(i)?"checked":""}> <span>${esc(x)}</span></label>`).join("")}</section>${rubric}`;
}

const isDone=S.done.includes(k);
view(`<div class="lesson-top"><button data-a="home" class="back-link">‹ All lessons</button><span class="lesson-meta">${sub}</span></div><h1 class="lesson-title">${esc(m[1])}</h1>
<div class="lesson-tabs">${[["n","▤","Notes"],["q","✎","Practice"],["p","☷","Practical"]].map(([v,ic,l])=>`<button data-a="tab" data-v="${v}" data-k="${k}" aria-pressed="${tab==v}"><span>${ic}</span>${l}</button>`).join("")}</div>
<div class="lesson-body">${h}</div><button class="complete-btn ${isDone?"completed":""}" data-a="done" data-k="${k}"><span>✓</span>${isDone?"Lesson completed":"Mark lesson as done"}</button>`);
}
function ans(b,d){const i=+d.i,j=+d.j,q=C[cur.k].q[i],r=j==q.a,o=S.d[cur.k]=S.d[cur.k]||{};if(!(i in o))o[i]=r?1:0;sv();
const x=b.closest(".q");x.querySelectorAll(".opt").forEach((y,n)=>{y.disabled=true;if(n==q.a)y.classList.add("good");else if(n==j)y.classList.add("bad")});
x.querySelector(".fb").textContent=(r?"✔ Correct. ":"✘ Not quite. The answer is "+q.o[q.a]+". ")+q.e}
function cbt(){const p=[];Object.keys(C).filter(k=>k.startsWith(S.c)&&can(k)).forEach(k=>C[k].q.forEach(q=>q.o&&p.push(q)));
if(!p.length)return view(`${BK}<h1>CBT practice</h1><p>No questions are open for this class yet.</p>`);
cur={cbt:p.sort(()=>Math.random()-.5).slice(0,10),a:[],end:Date.now()+9e5,submitted:false};
view(`${BK}<h1>CBT practice</h1><p>Time left: <b id="tm">15:00</b></p>${cur.cbt.map((q,i)=>`<section class="card"><span class="tag">${q.t}</span><p><b>${i+1}. ${esc(q.q)}</b></p>${q.o.map((o,j)=>`<button class="opt" data-a="pick" data-i="${i}" data-j="${j}" aria-pressed="false">${esc(o)}</button>`).join("")}</section>`).join("")}<button class="pri" data-a="sub">Submit</button>`);
tm=setInterval(()=>{const s=Math.max(0,Math.round((cur.end-Date.now())/1e3));$("#tm").textContent=Math.floor(s/60)+":"+String(s%60).padStart(2,"0");if(!s)sub()},1e3)}
function sub(){if(cur.submitted)return;cur.submitted=true;clearInterval(tm);const attempted=cur.a.filter(x=>Number.isInteger(x)).length,n=cur.cbt.filter((q,i)=>cur.a[i]===q.a).length;S.b=S.b||{a:0,c:0,s:0};S.b.a+=attempted;S.b.c+=n;S.b.s+=1;S.best=Math.max(S.best||0,Math.round(100*n/cur.cbt.length));sv();view(`${BK}<h1>Score: ${n} / ${cur.cbt.length}</h1><p>${attempted} of ${cur.cbt.length} questions attempted. Your CBT result is included in your progress code.</p>${cur.cbt.map((q,i)=>`<section class="card"><p><b>${i+1}. ${esc(q.q)}</b></p><p>${cur.a[i]===q.a?"✔ Correct. ":"✘ The answer is "+esc(q.o[q.a])+". "}${esc(q.e)}</p></section>`).join("")}`)}
const code=()=>btoa(unescape(encodeURIComponent(JSON.stringify({v:3,n:S.n||"Student",c:S.c,d:Object.fromEntries(Object.keys(S.d).map(k=>{const a=Object.values(S.d[k]);return[k,[a.reduce((x,y)=>x+y,0),a.length,C[k]?C[k].q.filter(q=>q.o).length:0]]})),b:S.b||{a:0,c:0,s:0}}))));
function sett(){view(`${BK}<h1>Settings</h1><label>My name<br><input id="nm" value="${esc(S.n)}"></label><div class="row"><b>Text size</b>${[[18,"Normal"],[22,"Big"],[27,"Biggest"]].map(([v,l])=>`<button data-fs="${v}" aria-pressed="${S.fs==v}">${l}</button>`).join("")}</div><div class="row"><b>Colours</b>${["light","soft","dark"].map(v=>`<button data-th="${v}" aria-pressed="${S.th==v}">${v}</button>`).join("")}<button id="sp" aria-pressed="${!!S.sp}">Wide spacing</button></div><label>School licence key<br><textarea id="lk" rows="3">${esc(S.lic)}</textarea></label><p><button class="pri" data-a="lic">Check key</button></p><p class="lic">${esc(L.msg)}</p><h2>My progress code</h2><p>Give this code to your teacher.</p><textarea readonly rows="3">${code()}</textarea>`)}
function teach(){view(`${BK}<h1>Teacher view</h1><p>Paste one student progress code per line.</p><textarea id="codes" rows="6"></textarea><div class="row"><button class="pri" data-a="tres">Show results</button><button data-a="csv">Download CSV</button></div><div id="tr"></div>`)}
const rows=()=>$("#codes").value.split("\n").map(x=>x.trim()).filter(Boolean).map(x=>{try{const o=JSON.parse(decodeURIComponent(escape(atob(x)))),v=Object.values(o.d||{}),r=v.reduce((a,b)=>a+b[0],0),attempted=v.reduce((a,b)=>a+b[1],0),total=v.reduce((a,b)=>a+(o.v>=2?b[2]:b[1]),0),score=o.v>=2?(attempted?Math.round(100*r/attempted)+"%":"-"):(total?Math.round(100*r/total)+"% (legacy)":"-"),b=o.b||{a:0,c:0,s:0};return[o.n,T[o.c]||o.c,v.length,o.v>=2?attempted+"/"+total:"not recorded",score,b.a||0,b.a?Math.round(100*(b.c||0)/b.a)+"%":"-"]}catch(e){return null}}).filter(Boolean);
function tres(){const r=rows();$("#tr").innerHTML=r.length?`<table><tr><th>Name</th><th>Class</th><th>Topics</th><th>Questions attempted</th><th>Practice accuracy</th><th>CBT attempted</th><th>CBT accuracy</th></tr>${r.map(x=>`<tr>${x.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</table>`:"<p>No valid codes found.</p>"}
function csv(){const t="Name,Class,Topics,Practice questions attempted,Practice accuracy,CBT questions attempted,CBT accuracy\n"+rows().map(r=>r.map(c=>'"'+String(c).replace(/^[=+\-@]/,"'$&").replace(/"/g,'""')+'"').join(",")).join("\n"),a=document.createElement("a");a.href=URL.createObjectURL(new Blob([t],{type:"text/csv"}));a.download="class-results.csv";a.click()}
document.addEventListener("input",e=>{if(e.target.id=="nm"){S.n=e.target.value;sv()}});
document.addEventListener("change",e=>{const el=e.target;if(el.matches("input[data-k][data-check]")){const k=el.dataset.k,i=Number(el.dataset.check),set=new Set(S.checks[k]||[]);el.checked?set.add(i):set.delete(i);S.checks[k]=[...set].sort((a,b)=>a-b);sv()}});
document.addEventListener("click",async e=>{const b=e.target.closest("button");if(!b)return;const d=b.dataset;
if(d.fs){S.fs=+d.fs;apply();sv();return sett()}
if(d.th){S.th=d.th;apply();sv();return sett()}
if(b.id=="sp"){S.sp=S.sp?0:1;apply();sv();return sett()}
switch(d.a){
case"home":home();break;case"gear":sett();break;case"me":sett();break;case"teach":teach();break;case"tres":tres();break;case"csv":csv();break;case"cbt":cbt();break;case"sub":sub();break;
case"cls":S.c=d.v;sv();home();break;case"term":S.term=+d.term;sv();home();break;case"done":S.done=S.done.includes(d.k)?S.done.filter(x=>x!==d.k):[...S.done,d.k];sv();topic(d.k,cur.tab||"n");break;case"term":S.term=+d.term;sv();home();break;case"done":S.done=S.done.includes(d.k)?S.done.filter(x=>x!==d.k):[...S.done,d.k];sv();topic(d.k,cur.tab||"n");break;
case"topic":topic(d.k);break;case"tab":topic(d.k,d.v);break;case"ans":ans(b,d);break;
case"pick":cur.a[+d.i]=+d.j;b.parentNode.querySelectorAll(".opt").forEach(x=>x.setAttribute("aria-pressed",x==b));break;
case"conv":{const n=Math.floor(+$("#num").value);$("#out").textContent=n>=0?`Binary: ${n.toString(2)} · Octal: ${n.toString(8)} · Hex: ${n.toString(16).toUpperCase()}`:"Type a whole number, 0 or more.";break}
case"say":try{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance($(".lesson-body")?.innerText||$("#app").innerText))}catch(x){}break;
case"lic":S.lic=$("#lk").value.trim();sv();L=await chk(S.lic);sett();break}});
apply();home();
if(S.lic)chk(S.lic).then(r=>{L=r;if(A.querySelector(".lic")&&A.querySelector(".ls"))home()});
if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js");
