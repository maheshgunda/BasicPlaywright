import{test,expect} from '@playwright/test'

test("SelectbyIndex",async({page})=>{

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);

    
     await page.locator("//input[@type='text']").fill("playwright");
     await page.locator("//input[@type='password']").fill("playwright");
     await page.getByRole("button",{name:"Login"}).click();

     await page.waitForTimeout(3000);

     // Switch to the frame
    const F = page.frameLocator("iframe#rightMenu");  // css id value
    // Locate the dropdown inside the frame
    const DD = F.locator("#loc_code");
    // Select "Emp. First Name"
   await DD.selectOption("6"); //Job Title
    
    await page.waitForTimeout(3000);
})
