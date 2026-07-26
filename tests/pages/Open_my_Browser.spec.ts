
import {test,expect} from '@playwright/test';

test("Open my browser",async({page})=>{
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(5000);
})