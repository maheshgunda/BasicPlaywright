import {test,expect} from '@playwright/test'

test("Drag and Drop", async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/Drag%20and%20Drop.html");
    
    const source =  page.locator("//img[@id='drag1']");
    const target =  page.locator("//div[@id='draghere']");

    // one way 
    //await page.dragAndDrop("//img[@id='drag1']","//div[@id='draghere']");

    // second way
    await source.dragTo(target);
    await page.waitForTimeout(3000);


})
