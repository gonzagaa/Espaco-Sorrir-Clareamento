const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const filePath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.goto(filePath, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));
  await page.waitForTimeout(500);

  const sections = ['.hero', '.promise', '.pain', '.solution', '.prf', '.why', '.testimonials', '.finance', '.about', '.faq', '.final'];
  for (const sel of sections) {
    const el = await page.$(sel);
    if (!el) continue;
    const name = sel.replace('.', '');
    await el.screenshot({ path: path.join(__dirname, 'after', 'section-' + name + '.png') });
    console.log(name);
  }
  await browser.close();
})();
