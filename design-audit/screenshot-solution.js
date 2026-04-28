const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const filePath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');
  const browser = await chromium.launch();
  for (const [w, h, name] of [[1440, 900, 'desktop'], [375, 812, 'mobile']]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: name === 'mobile' ? 2 : 1 });
    const page = await ctx.newPage();
    await page.goto(filePath, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));
    await page.waitForTimeout(400);
    const el = await page.$('.solution');
    await el.screenshot({ path: path.join(__dirname, 'after', `section-solution-${name}.png`) });
    await ctx.close();
  }
  await browser.close();
  console.log('done');
})();
