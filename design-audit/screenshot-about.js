const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const filePath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');
  const browser = await chromium.launch();
  for (const [w, h, name, dpr] of [[1440, 900, 'desktop', 1], [375, 812, 'mobile', 2]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: dpr });
    const page = await ctx.newPage();
    await page.goto(filePath, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));
    await page.waitForTimeout(400);
    const el = await page.$('.about');
    await el.screenshot({ path: path.join(__dirname, 'after', `section-about-${name}.png`) });
    await ctx.close();
  }
  await browser.close();
  console.log('done');
})();
