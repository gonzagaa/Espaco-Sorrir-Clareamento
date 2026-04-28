const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const which = process.argv[2] || 'before';
  const outDir = path.join(__dirname, which);
  const filePath = 'file:///' + path.resolve(__dirname, '..', 'index.html').replace(/\\/g, '/');

  const browser = await chromium.launch();

  // Desktop 1440 wide
  {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    await page.goto(filePath, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    // force reveal animations to finish
    await page.evaluate(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, 'desktop-full.png'), fullPage: true });
    await page.screenshot({ path: path.join(outDir, 'desktop-fold.png'), fullPage: false });
    await context.close();
    console.log('Desktop screenshots saved to', outDir);
  }

  // Mobile 375 wide
  {
    const context = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
    const page = await context.newPage();
    await page.goto(filePath, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.evaluate(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(outDir, 'mobile-full.png'), fullPage: true });
    await page.screenshot({ path: path.join(outDir, 'mobile-fold.png'), fullPage: false });
    await context.close();
    console.log('Mobile screenshots saved to', outDir);
  }

  await browser.close();
})();
