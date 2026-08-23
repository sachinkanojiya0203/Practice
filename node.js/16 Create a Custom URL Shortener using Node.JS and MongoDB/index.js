const express=require('express');
const URLroutes=require('./routes/url')
const {connectTomongoDB}=require('./connect')
const app=express();
const port=8001;


connectTomongoDB('mongodb://127.0.0.1:27017/Short-url').then(()=>console.log("MOngoDB Connected!"))
app.use(express.json());    


app.use('/url',URLroutes);

app.listen(port,()=>console.log(`Server started PORT: ${port}`))