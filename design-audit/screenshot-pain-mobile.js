const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const filePath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));
  await page.waitForTimeout(500);
  const el = await page.$('.pain');
  await el.screenshot({ path: path.join(__dirname, 'after', 'section-pain-mobile.png') });
  console.log('done');
  await browser.close();
})();
