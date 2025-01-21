const express = require('express')


const app = express()
 
 
app.get("/",(req,res)=>{
    res.send("Hello world")
})

 
app.get("/puluthi",(req,res)=>{
    res.send("valathi")
})
 

app.listen(1433, console.log("app is running in 1337"))
