const puppeteer = require('puppeteer')

const url = 'https://github.com'

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto(url);

await page.click()