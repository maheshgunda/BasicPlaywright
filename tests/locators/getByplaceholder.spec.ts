import{test,expect} from '@playwright/test'

test("GetByplaceHolder",async({page})=>{

    await page.goto("file:///C:/Users/mahes/OneDrive/Desktop/PlaceHolderPro.html");
    await page.waitForTimeout(3000);

    await page.getByPlaceholder("Username").fill("Mahesh");
    await page.getByPlaceholder("Password").fill("1231");
     await page.getByPlaceholder("Email address").fill("mahesh@gmail.com");
      await page.getByPlaceholder("Enter your comments").fill("Mahesh comments");
})
