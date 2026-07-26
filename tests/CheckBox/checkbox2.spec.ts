import {test,expect} from '@playwright/test'

test("count of checkbox",async({page})=>{

await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/Country%20Check%20box.html");

await page.waitForTimeout(3000);

await page.locator("//input[1]").check();
await page.locator("//input[2]").check();
await page.locator("//input[3]").check();
await page.locator("//input[4]").check();
await page.locator("//input[5]").check();


})