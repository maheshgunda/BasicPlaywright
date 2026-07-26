import {test,expect} from '@playwright/test'

test("handlingwindows",async({browser})=>{

    const context= await browser.newContext();
    const Parentpage =  await context.newPage(); // creating new page as parent
    await Parentpage.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
    await Parentpage.locator("//input[@type='text']").fill("playwright");
    await Parentpage.locator("//input[@type='password']").fill("playwright");
    await Parentpage.locator("//input[@type='Submit']").click();

    await Parentpage.waitForTimeout(2000);
    console.log("Title after login=> "+await Parentpage.title());
    await Parentpage.locator("//span[text()='Help']").hover();

    // opening child window

    const [childwindow] = await Promise.all
    ([
        context.waitForEvent("page"), // childpage initiated
        await Parentpage.locator("//span[text()='Forum']").click()
    ])

    
     await childwindow.waitForTimeout(4000);
     console.log("Title after clicking forum==>"+await childwindow.title());
     
     await childwindow.waitForTimeout(4000);

     await Parentpage.bringToFront(); // naviage to parent page
      console.log("Title after naviage to parent page=> "+await Parentpage.title());
    await childwindow.bringToFront(); // naviage to child page
     await childwindow.waitForTimeout(4000);
    // close the child window
    await childwindow.close();
    await Parentpage.waitForTimeout(3000);

})