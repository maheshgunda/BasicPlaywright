import {test,expect} from '@playwright/test'

test("count of checkbox",async({page})=>{

await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/Country%20Check%20box.html");

await page.waitForTimeout(3000);

const DD=  await page.locator("//input").count();
console.log("Count of checkbox" + DD);

})