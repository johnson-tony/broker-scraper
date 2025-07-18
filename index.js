const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    const targetUrl = 'https://example.com'; // Replace with your target URL
    await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });

    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);

    await browser.close();
  } catch (error) {
    console.error('Scraping failed:', error);
  }
})();
