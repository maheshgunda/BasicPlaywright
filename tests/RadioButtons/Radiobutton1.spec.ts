import {test,expect} from '@playwright/test'

test("Gender raido button", async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/Gender%20Radio%20%20Button.html");
    const dd = await page.locator("//input").count();
    console.log("Radio button count "+dd);

    await page.waitForTimeout(3000);


})
