const fs = require("fs")
const http = require('http');
var os = require('os');

const express = require('express')
const mssql = require('mssql')

/** 1. Read File */
// console.log(fs.readFileSync("Exmp.txt", { encoding: 'utf8', flag: 'r' }))


/** 2. Write File */
// fs.writeFileSync("Exmp.txt", "Hello Universe")
// console.log(fs.readFileSync("Exmp.txt", { encoding: 'utf8', flag: 'r' }))

let dbPool;
 
const dbConfig = {
    user:"msu_user",      
    password: "Password@123",
    database: "ContosoRetailDW",
    server: "INBAAVVMMSUSQL",    
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      enableArithAbort: true,
      "requestTimeout": 1000,
      encrypt: true,
      trustServerCertificate: true, 
    },
    connectionTimeout: 30000,
  };
 
const app = express()
 
 
app.get("/",(req,res)=>{
    res.send("Hello world")
})
 
app.get('/getapi', async (req, res) => {
    try {
      let query = `select top 10 * from [dbo].[Employees]`;
      const result = await dbPool.query(query)
      res.send(result.recordset)
    } catch (error) {
      res.send(error);
    }
  });

  app.get('/get_Employess', async (req,res) =>{
    try{
      let emp_name = req.query.emp_name
      let emp_query = `select * from 
       [dbo].[Employees] 
       where EmployeeName = '${emp_name}'`
       console.log(emp_query);
       const emp_result = await dbPool.query(emp_query)
       res.send(emp_result.recordset)
    } catch(error) {
      res.send(error)
    }
  })
 
mssql.connect(dbConfig).then((pool)=>{
    dbPool = pool;
    app.listen(3001, console.log("app is running in 3001"))
})
