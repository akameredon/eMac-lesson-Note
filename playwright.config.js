const { defineConfig } = require("@playwright/test");
module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: [["list"]],
  use: { baseURL: "http://127.0.0.1:4173", trace: "retain-on-failure", screenshot: "only-on-failure" },
  projects: [
    { name: "desktop-chromium", use: { browserName: "chromium", viewport: { width: 1365, height: 900 } } },
    { name: "mobile-chromium", use: { browserName: "chromium", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } }
  ],
  webServer: { command: "python3 -m http.server 4173 --bind 127.0.0.1", url: "http://127.0.0.1:4173", reuseExistingServer: !process.env.CI, timeout: 30000 }
});
