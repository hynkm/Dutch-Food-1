
const express = require("express")
const app = express()
const port = 8080

app.get("/",(req,res)=>{
    res.send("연결됐다.")
})
app.listen(port,()=>{
    console.log("연결됐다.")
})
