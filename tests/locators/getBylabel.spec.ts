import{test, expect} from '@playwright/test'

test("getBylabel",async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/ByLabel.html");

    await page.waitForTimeout(3000);

    await page.getByLabel("Username").fill("mahesh");
})