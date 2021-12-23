const express = require('express');

const app = express();

app.use((req,res,next)=>{
  console.log("1st");
 next();
}); //using 1st  middleware

app.use((req,res,next)=>{
  res.send('Hello from express')
 }); //using 2nd middleware



module.exports= app;
