const userRouter=require('./routes/user');
const userModule=require('./models/user')
const {connectionmongoDB}=require('./connection')
const {logReqRes}=require('./middlewares')
const express = require('express')
const port = 8000;

const app = express();

// Model View Controller in NodeJS | MVC Pattern
// connection
connectionmongoDB('mongodb://127.0.0.1:27017/Dummy_Project').then(()=>console.log('mongoDB connected!'))


// using middleware - plugin
app.use(express.urlencoded({extended:false}))
app.use(logReqRes('log.txt'))

// Routes
app.use('/api/users',userRouter);

app.listen(port, () => console.log(`server started! ${port}`))
