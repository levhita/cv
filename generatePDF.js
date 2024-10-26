import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.setViewport({ width: 1080, height: 1024 });

await page.goto('http://127.0.0.1:5174/?print',);

await page.waitForNetworkIdle({});

await page.pdf({
  path: 'public/levhita-cv.pdf',
  height: `3001px`,
  printBackground: true,
  waitForFonts: true,
  scale: .7
});

await browser.close();