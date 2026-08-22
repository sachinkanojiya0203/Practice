const express=require('express');
const URLroutes=require('./routes/url')
const app=express();
const port=8001;






app.use('/url',URLroutes);

app.listen(port,()=>console.log(`Server started PORT: ${port}`))