const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send("Hello world")
})

 
app.get("/puluthi",(req,res)=>{
    res.send("valathi")
})
 

app.listen(PORT, console.log(`App is running on port: ${process.env.PORT}`));
