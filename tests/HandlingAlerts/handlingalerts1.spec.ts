import {test,expect} from '@playwright/test'

test("Handling alerts Ok Button",async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/Alert%20Message.html");

    await page.waitForTimeout(3000);

    await page.on('dialog', async(m)=>{
        console.log("Dialog message:", m.message());
        console.log("Type of the alert", m.type()); //alert
        await m.accept();
    })

    await page.waitForTimeout(1000);
   await page.locator("//button[text()='Click Here']").click();

   await page.waitForTimeout(3000);

})