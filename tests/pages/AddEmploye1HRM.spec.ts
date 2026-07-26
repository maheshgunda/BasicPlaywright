import {test,expect} from '@playwright/test'

// for describe it will not be having any pages to consider
test.describe("Test scenario of adding one employee",()=>{ 

// launch the application - pre condition
let page : any;
let context;
test.beforeAll("launch the application",async({browser})=>{

    context = await browser.newContext();
    page= await context.newPage();
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    console.log("Application launched successfully");

    await page.waitForTimeout(3000);

})

test("Adding one employee",async()=>
    {
        await page.locator("//input[@name='txtUserName']").fill("playwright");
        await page.locator("//input[@name='txtPassword']").fill("playwright");
        await page.locator("//input[@type='Submit']").click();
        console.log("Login successfully", await page.title());
        await page.waitForTimeout(3000);
        await page.locator("//span[text()='PIM']").hover();
        await page.locator("//span[text()='Add Employee']").click();
        await page.waitForTimeout(3000);

       const f=   page.frameLocator("//iframe[@id='rightMenu']")
       await f.locator("//input[@id='txtEmployeeId']").fill("45346");
       await f.locator("//input[@id='txtEmpLastName']").fill("GG");
        await f.locator("//input[@id='txtEmpFirstName']").fill("MaheshH");
          await f.locator("//input[@id='txtEmpMiddleName']").fill("Chinnaa");
           await f.locator("//input[@id='txtEmpNickName']").fill("Nanii");

           await f.locator("//input[@id='photofile']").setInputFiles("./EmpPhoto/screenshot1.png");
        await f.locator("//input[@id='btnEdit']").click();

        await page.waitForTimeout(4000);

        await f.locator("//input[@value='Back']").click();
        await page.waitForTimeout(4000);

           
    })


})