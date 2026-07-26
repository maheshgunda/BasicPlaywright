// Skip and Fail and only one test cases

import {test,expect} from '@playwright/test'
 

test("Group 3- First test case -1", async({})=>{

    console.log("--Hi i am test case-1 Group 3--");

})
// skip the test case
test.skip("Group 3- Second test case -2", async({})=>{
     console.log("--Hi i am test case-2 Group 3--");
})
// Run particular the test case
test.only("Group 3- Third test case -3",async({})=>{
     console.log("--Hi i am test case-3 Group 3--");
})
// 
test.fail("Group 3- Fourth test case -4",async({})=>{
    console.log("--Hi i am test case-4 Group 3--");
})
//If you really want it to fail, write assertion
test.fail("Group 3- Fifth test case -5",async({})=>{
    console.log("--Hi i am test case-5 Group 3--");
    expect(true).toBeFalsy();  // true is actual value but expects the value to be false
  //  expect(true).toBe(200);  // true is actual value but expects the value to be 200
})

