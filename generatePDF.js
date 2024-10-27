import puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.setViewport({ width: 1080, height: 1024 });

await page.goto('http://127.0.0.1:5173/?print',);

await page.waitForNetworkIdle({});

const body = await page.$('html');
const bodyBoundingBox = await body.boundingBox();

await page.pdf({
  path: 'public/levhita-fullstack-cv.pdf',
  height: `${bodyBoundingBox.height * .7}px`,
  printBackground: true,
  waitForFonts: true,
  scale: .7
});

await browser.close();