import{test,expect} from '@playwright/test'

test("GetBytext",async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/ByTextFile.html");
    await page.waitForTimeout(3000);

    await page.getByText("MyGoogle").click();
    
    
     await page.waitForTimeout(3000);
     
})
