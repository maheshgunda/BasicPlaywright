import{expect,test} from '@playwright/test'

// test.describe is to group test cases like login, home page
test.describe("Sprint 1", async()=>{
    
    test("Test case- 1 sprint 1",async()=>{
        console.log("Hii i am test case 1-Sprint 1");
    })

    test("Test case- 2 sprint 1",async()=>{
        console.log("Hii i am test case 2-Sprint 1")
    })

    test("Test case- 3 sprint 1",async()=>{
        console.log("Hii i am test case 3-Sprint 1")
    })

    test("Test case- 4 sprint 1",async()=>{
        console.log("Hii i am test case 4-Sprint 1")
    })

})

test.describe("Sprint 2",async()=>{

    test("Test case- 1 sprint 2",async()=>{
        console.log("Hii i am test case 1-Sprint 2")
    }) 

    test("Test case- 2 sprint 2",async({})=>{
        console.log("Hii i am test case 2-Sprint 2")
    })

}

)
