const { test, expect } = require("@playwright/test");
const { webcrypto } = require("node:crypto");
const RUBRIC_LESSONS = ["ss1-1-2","ss1-1-4","ss1-1-6","ss1-1-8","ss1-1-9","ss1-2-1","ss1-2-2","ss1-2-6","ss1-2-8","ss1-3-2","ss1-3-3","ss1-3-4","ss1-3-8","ss1-3-9","ss1-3-10"];
const b64url = bytes => Buffer.from(bytes).toString("base64url");
async function makeTestLicense() {
  for(let attempt=0;attempt<20;attempt++){
    const pair=await webcrypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},true,["sign","verify"]);
    const pub=await webcrypto.subtle.exportKey("jwk",pair.publicKey);
    const keyring={version:1,activeKeyId:"test-key-2026",keys:{"test-key-2026":pub}};
    async function sign(overrides={}){
      const payloadBytes=Buffer.from(JSON.stringify({v:2,kid:"test-key-2026",licenceId:"00000000-0000-4000-8000-000000000001",school:"Browser Acceptance Test School",exp:"2099-12-31",...overrides}));
      const payload=b64url(payloadBytes);
      const signature=await webcrypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},pair.privateKey,payloadBytes);
      return payload+"."+b64url(signature);
    }
    const licence=await sign();
    if(licence.includes("-")&&licence.includes("_"))return{keyring,licence,sign};
  }
  throw new Error("Could not generate a URL-safe Base64 licence fixture");
}
test.beforeEach(async ({page}) => {
  const fixture=await makeTestLicense();\n  const {keyring,licence}=fixture;\n  page.licenceFixtures=fixture;
  await page.addInitScript(({value,publicKeyring})=>{
    localStorage.setItem("emac",JSON.stringify({n:"Acceptance Tester",c:"ss1",fs:18,th:"",sp:0,d:{},lic:value}));
    const nativeFetch=window.fetch.bind(window);
    window.fetch=(input,init)=>{
      const requestUrl=typeof input==="string"?input:input.url;
      if(new URL(requestUrl,location.href).pathname.endsWith("/keys.json")){
        return Promise.resolve(new Response(JSON.stringify(publicKeyring),{status:200,headers:{"Content-Type":"application/json"}}));
      }
      return nativeFetch(input,init);
    };
  },{value:licence,publicKeyring:keyring});
  await page.goto("/");
  await expect(page.locator(".lic")).toContainText("Browser Acceptance Test School");
});
async function openPractical(page,key) {
  await page.locator('button[data-a="topic"][data-k="'+key+'"]').click();
  await page.locator('button[data-a="tab"][data-v="p"]').click();
}
const ALL_SS1_LESSONS = ["ss1-1-1","ss1-1-2","ss1-1-3","ss1-1-4","ss1-1-6","ss1-1-8","ss1-1-9","ss1-1-10","ss1-2-1","ss1-2-2","ss1-2-3","ss1-2-4","ss1-2-6","ss1-2-8","ss1-2-9","ss1-2-10","ss1-3-1","ss1-3-2","ss1-3-3","ss1-3-4","ss1-3-6","ss1-3-8","ss1-3-9","ss1-3-10"];
test("all 24 SS1 lesson records contain notes, practice and practical activities",async ({page})=>{
  let first=true;
  for(const key of ALL_SS1_LESSONS){
    if(!first) await page.locator('button[data-a="home"]').first().click();
    first=false;
    await page.locator('button[data-a="topic"][data-k="'+key+'"]').click();
    await expect(page.locator(".card h3").first(),key+" notes").toBeVisible();
    if(key==="ss1-1-6"){
      await expect(page.getByRole("heading",{name:"Sequence, selection and iteration",exact:true})).toBeVisible();
      await expect(page.getByRole("heading",{name:"Selection examples: number classification and mock login",exact:true})).toBeVisible();
    }
    if(key==="ss1-2-2") await expect(page.getByRole("heading",{name:"Webpages, websites and website behaviour",exact:true})).toBeVisible();
    if(key==="ss1-3-3") await expect(page.getByRole("heading",{name:"Percentages in data",exact:true})).toBeVisible();
    if(key==="ss1-3-8") await expect(page.getByRole("heading",{name:"Worked SQL example using SQLite",exact:true})).toBeVisible();
    if(key==="ss1-3-9") await expect(page.getByRole("heading",{name:"Stages of image recognition",exact:true})).toBeVisible();
    if(key==="ss1-3-10") await expect(page.getByRole("heading",{name:"Build record, control functions and calibration",exact:true})).toBeVisible();
    if(key==="ss1-2-8") await expect(page.getByRole("heading",{name:"Location and privacy controls",exact:true})).toBeVisible();
    if(key==="ss1-2-9") await expect(page.getByRole("heading",{name:"Secure school email",exact:true})).toBeVisible();
    await page.locator('button[data-a="tab"][data-v="q"]').click();
    await expect(page.locator(".q").first(),key+" practice questions").toBeVisible();
    await page.locator('button[data-a="tab"][data-v="p"]').click();
    await expect(page.locator(".card ol li").first(),key+" practical steps").toBeVisible();
    await expect(page.locator(".ck input[type='checkbox']").first(),key+" assessment checklist").toBeVisible();
    if(key==="ss1-2-10") await expect(page.getByText(/teacher-managed, school-approved demonstration account/)).toBeVisible();
    if(key==="ss1-3-8") await expect(page.getByText(/three related tables/).first()).toBeVisible();
    if(key==="ss1-2-1") await expect(page.getByText(/ping command/)).toBeVisible();
    if(key==="ss1-2-8") await expect(page.getByText(/location-permission control/)).toBeVisible();
    if(key==="ss1-2-9") await expect(page.getByText(/school email demonstration/)).toBeVisible();
    if(key==="ss1-3-4") await expect(page.getByText(/sample advertisement for a local business/)).toBeVisible();
  }
});
test("tampered licence signatures are rejected",async ({page})=>{
  await page.locator('button[data-a="gear"]').click();
  const field=page.locator("#lk");
  const parts=(await field.inputValue()).split(".");
  parts[1]=(parts[1][0]==="A"?"B":"A")+parts[1].slice(1);
  await field.fill(parts.join("."));
  await page.locator('button[data-a="lic"]').click();
  await expect(page.locator(".lic")).toContainText("That licence key is not valid.");
});
test("home and class navigation render without page errors",async ({page})=>{
  const errors=[];page.on("pageerror",error=>errors.push(error.message));
  await expect(page.getByRole("heading",{name:"Digital Technologies"})).toBeVisible();
  await expect(page.locator('button[data-a="cls"]')).toHaveCount(3);
  await page.locator('button[data-a="cls"][data-v="ss2"]').click();
  await expect(page.getByRole("heading",{name:"Term 1"})).toBeVisible();
  await page.locator('button[data-a="cls"][data-v="ss1"]').click();
  expect(errors).toEqual([]);
});
test("all 15 practical rubrics render with accessible table structure and intact checklists",async ({page})=>{
  let first=true;
  for(const key of RUBRIC_LESSONS){
    if(!first) await page.locator('button[data-a="home"]').first().click();
    first=false;
    await openPractical(page,key);
    const region=page.getByRole("region",{name:"Practical assessment rubric"});
    await expect(region,key+" rubric region").toBeVisible();
    await expect(region.locator("thead th[scope='col']")).toHaveCount(4);
    await expect(region.locator("tbody tr")).toHaveCount(4);
    await expect(region.locator("tbody th[scope='row']")).toHaveCount(4);
    await expect(page.locator(".ck input[type='checkbox']").first(),key+" original checklist").toBeVisible();
  }
});
test("CBT results are recorded and teacher view reads the progress code",async ({page})=>{
  await page.locator('button[data-a="cbt"]').click();
  await expect(page.getByRole("heading",{name:"CBT practice"})).toBeVisible();
  await page.locator(".card .opt").first().click();
  await page.locator('button[data-a="sub"]').click();
  await expect(page.getByRole("heading",{name:/Score:/})).toBeVisible();
  const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem("emac")));
  expect(saved.b.s).toBe(1);
  expect(saved.b.a).toBe(1);
  await page.locator('button[data-a="home"]').first().click();
  await page.locator('button[data-a="gear"]').click();
  const progress=await page.locator("textarea[readonly]").inputValue();
  expect(progress.length).toBeGreaterThan(20);
  await page.locator('button[data-a="home"]').first().click();
  await page.locator('button[data-a="teach"]').click();
  await page.locator("#codes").fill(progress);
  await page.locator('button[data-a="tres"]').click();
  await expect(page.locator("#tr")).toContainText("Acceptance Tester");
  await expect(page.locator("#tr")).toContainText("CBT attempted");
  const downloadPromise=page.waitForEvent("download");
  await page.locator('button[data-a="csv"]').click();
  const download=await downloadPromise;
  expect(download.suggestedFilename()).toBe("class-results.csv");
});
test("core lesson app shell reloads while offline after service-worker install",async ({page})=>{
  await page.evaluate(()=>navigator.serviceWorker.ready);
  await page.reload();
  await page.context().setOffline(true);
  try {
    await page.reload();
    await expect(page.getByRole("heading",{name:"Digital Technologies"})).toBeVisible();
  } finally {
    await page.context().setOffline(false);
  }
});
test("rubric region supports keyboard focus and mobile horizontal scrolling",async ({page},testInfo)=>{
  await openPractical(page,"ss1-2-1");
  const region=page.getByRole("region",{name:"Practical assessment rubric"});
  await region.focus();await expect(region).toBeFocused();
  const metrics=await region.evaluate(el=>({clientWidth:el.clientWidth,scrollWidth:el.scrollWidth,tabIndex:el.tabIndex}));
  expect(metrics.tabIndex).toBe(0);
  if(testInfo.project.name==="mobile-chromium")expect(metrics.scrollWidth).toBeGreaterThan(metrics.clientWidth);
});
test("existing practice and CBT entry points remain reachable",async ({page})=>{
  await page.locator('button[data-a="topic"][data-k="ss1-1-3"]').click();
  await expect(page.getByRole("heading",{name:"Number Systems",exact:true})).toBeVisible();
  await page.locator('button[data-a="tab"][data-v="q"]').click();
  await expect(page.locator(".q").first()).toBeVisible();
  await page.locator('button[data-a="home"]').first().click();
  await page.locator('button[data-a="cbt"]').click();
  await expect(page.getByRole("heading",{name:"CBT practice"})).toBeVisible();
});

test("validly signed licence with an unknown key ID is rejected",async ({page})=>{
  const unknown={licence:await page.licenceFixtures.sign({kid:"not-in-keyring"})};
  await page.locator('button[data-a="gear"]').click();
  await page.locator("#lk").fill(unknown.licence);
  await page.locator('button[data-a="lic"]').click();
  await expect(page.locator(".lic")).toContainText("unrecognised key");
});
test("expired licence is rejected after signature verification",async ({page})=>{
  const expired={licence:await page.licenceFixtures.sign({exp:"2000-01-01"})};
  await page.locator('button[data-a="gear"]').click();
  await page.locator("#lk").fill(expired.licence);
  await page.locator('button[data-a="lic"]').click();
  await expect(page.locator(".lic")).toContainText("licence expired on 2000-01-01");
});
test("malformed signed payload is rejected",async ({page})=>{
  const malformed=b64url(Buffer.from(JSON.stringify({v:2,kid:"test-key-2026",licenceId:"missing-school",exp:"2099-12-31"})))+".AA";
  await page.locator('button[data-a="gear"]').click();
  await page.locator("#lk").fill(malformed);
  await page.locator('button[data-a="lic"]').click();
  await expect(page.locator(".lic")).toContainText("unsupported or malformed format");
});
test("missing public keyring fails closed",async ({page})=>{
  await page.locator('button[data-a="gear"]').click();
  await page.evaluate(()=>{
    window.fetch=()=>Promise.resolve(new Response("missing",{status:404}));
  });
  await page.locator('button[data-a="lic"]').click();
  await expect(page.locator(".lic")).toContainText("public keyring is missing");
});
