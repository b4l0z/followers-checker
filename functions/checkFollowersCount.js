async function checkFollowersCount(user) {
  const url = `https://www.instagram.com/${user}/`;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.waitForSelector("header section ul li:nth-child(2) span");
  const followersText = await page.$eval("header section ul li:nth-child(2) span", (el) => el.getAttribute("title") || el.innerText);
  await browser.close();
  return followersText;
}

module.exports = { checkFollowersCount };
