import {test,expect} from '@playwright/test'

test("Gender raido button", async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/Gender%20Radio%20%20Button.html");
    
    await page.locator("//input[@value='male']").check();

    await page.waitForTimeout(3000);


})
