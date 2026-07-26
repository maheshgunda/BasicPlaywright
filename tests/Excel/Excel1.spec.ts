import {test,expect} from '@playwright/test'
import myexcel from 'xlsx';


test("Reading data from excel file",async()=>{


    function readexcel(fpath:any ,sname:any ){
        const wb= myexcel.readFile(fpath); // excel workbook
        const ws= wb.Sheets[sname]; // excel sheetname
        const data:any= myexcel.utils.sheet_to_json(ws, {header : 1});   // convert excel to json of ws   
        return data;    
    }
    // call a function
   // const exceldata: any = readexcel("D:/Batch8_PlaywrightPrograms/Batch8AM_BasicPlaywright/tests/EmpExcelData/EMP1.xlsx",
   // "CompanyEmployess");

   // read excel from project location
    const exceldata: any = readexcel( "./tests/EmpExcelData/EMP1.xlsx",
    "CompanyEmployess");

   console.log(exceldata[1][0]);


})