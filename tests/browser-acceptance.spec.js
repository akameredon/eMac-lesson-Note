const { test, expect } = require("@playwright/test");
const { webcrypto } = require("node:crypto");
const RUBRIC_LESSONS = ["ss1-1-2","ss1-1-4","ss1-1-6","ss1-1-8","ss1-1-9","ss1-2-1","ss1-2-2","ss1-2-6","ss1-2-8","ss1-3-2","ss1-3-3","ss1-3-4","ss1-3-8","ss1-3-9","ss1-3-10"];
const b64url = bytes => Buffer.from(bytes).toString("base64url");
async function makeTestLicense() {
  const payload = b64url(Buffer.from(JSON.stringify({school:"Browser Acceptance Test School",exp:"2099-12-31"})));
  // Ensure the fixture exercises both URL-safe Base64 characters, not just alphanumerics.
  for (let attempt=0;attempt<20;attempt++) {
    const pair = await webcrypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},true,["sign","verify"]);
    const pub = await webcrypto.subtle.exportKey("jwk",pair.publicKey);
    const signature = await webcrypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},pair.privateKey,Buffer.from(payload));
    const encoded = b64url(signature);
    if ((payload+encoded).includes("-") && (payload+encoded).includes("_")) return {pub,licence:payload+"."+encoded};
  }
  throw new Error("Could not generate a URL-safe Base64 licence fixture");
}
test.beforeEach(async ({page}) => {
  const {pub,licence}=await makeTestLicense();
  await page.route("**/pub.json",route=>route.fulfill({status:200,contentType:"application/json",body:JSON.stringify(pub)}));
  await page.addInitScript(value=>localStorage.setItem("emac",JSON.stringify({n:"Acceptance Tester",c:"ss1",fs:18,th:"",sp:0,d:{},lic:value})),licence);
  await page.goto("/");
  await expect(page.locator(".lic")).toContainText("Browser Acceptance Test School");
});
async function openPractical(page,key) {
  await page.locator('button[data-a="topic"][data-k="'+key+'"]').click();
  await page.locator('button[data-a="tab"][data-v="p"]').click();
}
const ALL_SS1_LESSONS = ["ss1-1-1","ss1-1-2","ss1-1-3","ss1-1-4","ss1-1-6","ss1-1-8","ss1-1-9","ss1-1-10","ss1-2-1","ss1-2-2","ss1-2-3","ss1-2-4","ss1-2-6","ss1-2-8","ss1-2-9","ss1-2-10","ss1-3-1","ss1-3-2","ss1-3-3","ss1-3-4","ss1-3-6","ss1-3-8","ss1-3-9","ss1-3-10"];
test("all 24 SS1 lesson records contain notes, practice and practical activities",async ({page})=>{
  for(const key of ALL_SS1_LESSONS){
    await page.locator('button[data-a="home"]').first().click().catch(()=>{});
    await page.locator('button[data-a="topic"][data-k="'+key+'"]').click();
    await expect(page.locator(".card h3").first(),key+" notes").toBeVisible();
    if(key==="ss1-1-6") await expect(page.getByRole("heading",{name:"Sequence, selection and iteration"})).toBeVisible();
    await page.locator('button[data-a="tab"][data-v="q"]').click();
    await expect(page.locator(".q").first(),key+" practice questions").toBeVisible();
    await page.locator('button[data-a="tab"][data-v="p"]').click();
    await expect(page.locator(".card ol li").first(),key+" practical steps").toBeVisible();
    await expect(page.locator(".ck input[type='checkbox']").first(),key+" assessment checklist").toBeVisible();
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
  for(const key of RUBRIC_LESSONS){
    await page.locator('button[data-a="home"]').first().click().catch(()=>{});
    await openPractical(page,key);
    const region=page.getByRole("region",{name:"Practical assessment rubric"});
    await expect(region,key+" rubric region").toBeVisible();
    await expect(region.locator("thead th[scope='col']")).toHaveCount(4);
    await expect(region.locator("tbody tr")).toHaveCount(4);
    await expect(region.locator("tbody th[scope='row']")).toHaveCount(4);
    await expect(page.locator(".ck input[type='checkbox']").first(),key+" original checklist").toBeVisible();
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
  await expect(page.getByRole("heading",{name:"Number Systems"})).toBeVisible();
  await page.locator('button[data-a="tab"][data-v="q"]').click();
  await expect(page.locator(".q").first()).toBeVisible();
  await page.locator('button[data-a="home"]').first().click();
  await page.locator('button[data-a="cbt"]').click();
  await expect(page.getByRole("heading",{name:"CBT practice"})).toBeVisible();
});
