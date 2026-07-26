import {test,expect} from '@playwright/test'

test("TakeScreenshot",async({page})=>{
// Particular page case
// await page.screenshot({path: "./TestProofs/HomePage.jpg"});

/* Three ways to capture screenshot
1. Entire page means open snapdeal and copy the page from first to last
2. Specfic to web Element
3. Particular page  */

    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(3000);
    // screenshot
    await page.screenshot({path: "./TestProofs/HomePage.jpg"});

    await page.locator("//input[@name='txtUserName']").fill("playwright");
    await page.locator("//input[@name='txtPassword']").fill("playwright");
    await page.locator("//input[@name='Submit']").click();

    await page.waitForTimeout(3000);
    console.log("PageTitle=>" +await page.title());

    await page.locator("//span[text()='PIM']").hover();
    await page.locator("//span[text()='Add Employee']").click();
    await page.screenshot({path: "./TestProofs/AfterLogin.jpg"});
    // Frame Locator
    const f=   page.frameLocator("//iframe[@id='rightMenu']");
    await page.locator("//input[@name='txtEmployeeId']").fill("88987");
    await f.locator("//input[@id='txtEmployeeId']").fill("45346");
    await f.locator("//input[@id='txtEmpLastName']").fill("GG");
    await f.locator("//input[@id='txtEmpFirstName']").fill("MaheshH");
    await f.locator("//input[@id='txtEmpMiddleName']").fill("Chinnaa");
    await f.locator("//input[@id='txtEmpNickName']").fill("Nanii");
    // to upload file
    await f.locator("//input[@id='photofile']").setInputFiles("./EmpPhoto/screenshot1.png"); 
    await f.locator("//input[@id='btnEdit']").click();
    await page.screenshot({path: "./TestProofs/TestData.jpg"});

    await page.waitForTimeout(4000);     
})