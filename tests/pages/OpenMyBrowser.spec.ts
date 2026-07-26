import {test, expect, chromium} from '@playwright/test'

test("Open my browser",async({})=>{
    const browserlaunch = await chromium.launch();
    const mysession = await browserlaunch.newContext();
    const mywebpage = await mysession.newPage()

    await(mywebpage.goto("http://127.0.0.1/orangehrm-2.5.0.2/index.php?menu_no_top=eim"));

})