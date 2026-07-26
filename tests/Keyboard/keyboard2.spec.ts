import{test,expect} from '@playwright/test'

test("Tab Functionality",async({page})=>{

    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);

    
     await page.locator("//textarea[@name='q']").fill("playwright   ");
     await page.keyboard.press("Backspace");
     await page.waitForTimeout(3000);
    await page.keyboard.press("Control+A")
     await page.waitForTimeout(3000);
    await page.keyboard.press("Control+X")
    await page.waitForTimeout(3000);
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(3000);
})
