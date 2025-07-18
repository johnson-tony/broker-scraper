const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true, // Set false to see the browser
  });
  const page = await browser.newPage();

  await page.goto('https://example.com');
  const title = await page.title();

  console.log('Page title:', title);

  await browser.close();
})();
