const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

function CreateScreenShotPath(filename) {
  const folderPath = path.join(__dirname, "screenshots");

  // Membuat folder jika belum ada
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  return (screenshotPath = path.join(folderPath, filename));
}

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page
    .goto("http://127.0.0.1:8080/", {
      waitUntil: "domcontentloaded",
      timeout: 5000,
      waitUntil: "networkidle2",
    })
    .catch((e) => {
      console.log(e);
    });

  await page.type("#nama", "Bijak Algifan Putra");
  await page.type("#email", "bijak@gmail.com");
  await page.type("#nomor_telepon", "87737771211");

  await page.screenshot({ path: CreateScreenShotPath("1.1 Isi Form.png") });
  console.log("Isi Form Result : ", CreateScreenShotPath("1.1 Isi Form.png"));

  await page.click("#button");

  await delay(3000);

  // Error Check
  await page.waitForSelector(".error-message#post-error");

  const errorMessage = await page.$eval(
    ".error-message#post-error",
    (element) => {
      return element.textContent.trim();
    }
  );

  if (errorMessage) {
    console.error("Error Message:", errorMessage);
    await page.screenshot({
      path: CreateScreenShotPath("1.2.1" + errorMessage + ".png"),
    });
    console.log(
      "ErrorMessage Result : ",
      CreateScreenShotPath("1.2.1" + errorMessage + ".png")
    );
  } else {
    await page.screenshot({
      path: CreateScreenShotPath("1.2 Feedback Setelah isi Form.png"),
    });
    console.log(
      "Feedback setelah Isi Form : ",
      CreateScreenShotPath("1.2 Feedback Setelah isi Form.png")
    );

    await page.waitForSelector('a[href="./results.html"]');
    await page.click('a[href="./results.html"]');
    await delay(2000);

    await page.screenshot({
      path: CreateScreenShotPath("2.1 Result Page.png"),
    });
    console.log(
      "Result Get All Data : ",
      CreateScreenShotPath("2.1 Result Page.png")
    );

    await page.type("#searchInput", "1");
    await page.waitForSelector("#btnSearch");
    await page.click("#btnSearch");

    await delay(2000);
    await page.screenshot({
      path: CreateScreenShotPath("2.2 Search By Id 1.png"),
    });
    console.log(
      "Result Get By ID 1: ",
      CreateScreenShotPath("2.2 Search By Id 1.png")
    );
  }

  await delay(2000);
  await browser.close();
})();
