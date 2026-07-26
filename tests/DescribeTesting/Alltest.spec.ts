import{test,expect} from '@playwright/test'
// To run smoke cases-  npx playwright test .\\tests\\DescribeTesting\\Alltest.spec.ts --grep "@smoke"
// To run smoke and regression cases-
//   npx playwright test .\\tests\\DescribeTesting\\Alltest.spec.ts --grep invert "@smoke|@regression"

// To run skip regression cases-// To run smoke cases-  
// npx playwright test .\\tests\\DescribeTesting\\Alltest.spec.ts --grep-invert "@smoke"


test("Test case- 1 sprint 1 regression",{tag: '@regression'},async()=>{
        console.log("Test case- 1 sprint 1 regression");
})

test("Test case- 2 sprint 1 smoke",{tag: '@smoke'},async()=>{
        console.log("Test case- 2 sprint 1 smoke");
})

test("Test case- 3 sprint 1 regression",{tag: '@regression'},async()=>{
        console.log("Test case- 3 sprint 1 regression");
})

test("Test case- 4 sprint 1 smoke",{tag: '@smoke'},async()=>{
        console.log("Test case- 4 sprint 1 smoke");
})

test("Test case- 5 sprint 1 regression",{tag: '@regression'},async()=>{
        console.log("Test case- 4 sprint 1 smoke");
})

test("Test case- 6 sprint 1 smoke",{tag: '@smoke'},async()=>{
        console.log("Hii i am test case 1-Sprint 1");
})

test("Test case- 7 sprint 1 smoke",{tag: '@smoke'},async()=>{
        console.log("Hii i am test case 1-Sprint 1");
})

test("Test case- 8 sprint 1 smoke",{tag: '@smoke'},async()=>{
        console.log("Hii i am test case 1-Sprint 1");
})
test("Test case- 9 sprint 1 regression",{tag: '@regression'},async()=>{
        console.log("Hii i am test case 1-Sprint 1");
})

test("Test case- 10 sprint 1 regression",{tag: '@regression'},async()=>{
        console.log("Hii i am test case 1-Sprint 1");
})

test("Test case- 11 sprint 1 smoke",{tag: '@smoke'},async()=>{
        console.log("Hii i am test case 1-Sprint 1");
})
test("Test case- 12 sprint 1 sanity",{tag:'@sanity'},async()=>{
        console.log("Hii i am test case 1-Sprint 1");
})
test("Test case- 13 sprint 1 sanity",{tag:'@sanity'},async()=>{
        console.log("Hii i am test case 1-Sprint 1");
})

