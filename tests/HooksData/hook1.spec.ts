import { test, expect } from '@playwright/test'

test.describe("Checking pre and post condition",async()=>{

test.beforeAll("Before ALL",async()=>{
console.log("Before All - Runs once before all tests")
})

test.beforeEach("Before each",async({})=>{
    console.log("Before Each - Runs before every test")
})

test("Valid Login",async({})=>{
    console.log("Executing Valid Login");

})

 test("Invalid Login", async () => {
        console.log("Executing Invalid Login");
    });

test.afterEach("After each",async({})=>{
    console.log("After Each - Runs after every test")
})

test.afterAll("After all method",async({})=>{
    console.log("After All - Runs once after all tests")
})


})



   

