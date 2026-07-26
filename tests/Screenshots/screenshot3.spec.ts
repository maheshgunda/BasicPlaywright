import {test,expect} from '@playwright/test'

test("TakeScreenshot",async({page})=>{
// Capture Particluar login screenshot
//  await page.locator("//table[@cellpadding=3]").screenshot({path: "./TestProofs/HomePageLoginTable.jpg"});
/* Three ways to capture screenshot
1. Entire page means open snapdeal and copy the page from first to last
2. Specfic to web Element
3. Capture Particluar login screenshot  */

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='txtUserName']").fill("playwright");
    await page.locator("//input[@name='txtPassword']").fill("playwright");
    await page.locator("//table[@cellpadding=3]").screenshot({path: "./TestProofs/HomePageLoginTable.jpg"});
    await page.locator("//input[@name='Submit']").click();

    await page.waitForTimeout(3000);
 
})