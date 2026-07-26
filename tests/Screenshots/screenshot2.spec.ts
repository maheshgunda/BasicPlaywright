import {test,expect} from '@playwright/test'

test("TakeScreenshot",async({page})=>{
// Full Page screen shot
// await page.screenshot({path: "./TestProofs/HomePage.jpg",fullPage : true});


/* Three ways to capture screenshot
1. Entire page means open snapdeal and copy the page from first to last
2. Specfic to web Element
3. Particular page  */

    await page.goto("https://www.snapdeal.com/");
    await page.waitForTimeout(3000);
    // screenshot
    await page.screenshot({path: "./TestProofs/SnapDealHomePage.jpg",fullPage : true});
     await page.waitForTimeout(3000);
      
})