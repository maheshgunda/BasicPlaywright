import{test,expect} from '@playwright/test'

test("GetByTestid",async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/ByTestID.html");
    await page.waitForTimeout(3000);

    await page.getByTestId("username-input").fill("getbyTestid");
    
    
     await page.waitForTimeout(3000);
     
})
