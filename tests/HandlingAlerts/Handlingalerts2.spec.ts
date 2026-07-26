import {test,expect} from '@playwright/test'

test("Handling alert OK and Cance",async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/AlertsOkCancel.html");
    await page.waitForTimeout(2000);

     await  page.on('dialog',async(m)=>{
        console.log("cancel the alert==>" ,m.message());
        console.log("Type of the alert", m.type()); // confirm  
        await m.dismiss();
     })

    await page.locator("//button[text()='Click Here']").click();


})