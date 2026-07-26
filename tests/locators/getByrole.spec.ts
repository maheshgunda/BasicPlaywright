import{test,expect} from '@playwright/test'

test("GetByRole",async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);

    
     await page.locator("//input[@type='text']").fill("playwright");
     await page.locator("//input[@type='password']").fill("playwright");
     await page.getByRole("button",{name:"Login"}).click();

     await page.waitForTimeout(3000);
     
})
