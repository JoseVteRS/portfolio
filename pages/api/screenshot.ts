import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "../../utils/pupeeteer";
import chrome from "chrome-aws-lambda";

// https://gist.github.com/ftdgomez/a7e417688c3e59ce01fb4e78a76b709a
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await puppeteer.launch(
      process.env.NODE_ENV === "production"
        ? {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
          }
        : {}
    );
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:86.0) Gecko/20100101 Firefox/86.0"
    );
    await page.setViewport({
      width: 1920,
      height: 1080,
    });

    await page.goto(req.query.url as string);
    const screenshot = await page.screenshot({
      encoding: "base64",
    });

    await browser.close();
    res.json({ blob: `data:image/jpeg;base64,${screenshot}` });
  } catch (error) {
    console.log(error);
  }
};
