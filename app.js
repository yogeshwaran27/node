const express = require('express')


const app = express()
 
 
app.get("/",(req,res)=>{
    res.send("Hello world")
})
 

app.listen(3001, console.log("app is running in 3001"))
