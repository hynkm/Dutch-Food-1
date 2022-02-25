
const express = require("express")
const app = express()
const port = 8080
const { sequelize } = require("./models");


sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/",(req,res)=>{
    res.send("연결됐다.")
})
app.listen(port,()=>{
    console.log("연결됐다.")
})
