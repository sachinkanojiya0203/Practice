const mongoose=require('mongoose')
const fs=require('fs')
const express = require('express')
const users = require('./user.json');
const port = 8000;

const app = express();

// Connection
 
mongoose.connect('mongodb://127.0.0.1:27017/Dummy_Project')
.then(()=>{console.log('mongoDB Connected!')})
.catch((err)=>console.log('Mongo error',err));

// Schema

const userschema= new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
    },
    Lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    }
},{timestamps:true}
)

const User=mongoose.model('user',userschema);

// using middleware - plugin
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
    console.log('this is middleware 1!')
    next();
})
app.use((req,res,next)=>{
    console.log('this is middleware 2 !')
    fs.appendFile("log.txt",`\n ${Date.now()} ${req.ip} : ${req.method} ${req.path}`,(err,data)=>{

        next();
    })
    // return res.json({msg:'this is middleware!'})
})
// ROUTES

app.get('/users', async(req, res) => {
    const allusers=await User.find({})
    const html = `
    <ul>
    ${allusers.map((users) => `<li>First Name: ${users.Firstname} ,Last name: ${users.Lastname} ,E-mail: ${users.email}</li>`).join("")}
    </ul>
    `
    res.send(html)
    
})

// Rest api

app.get('/api/users', (req, res) => {
    res.header('X-myname','sachin_kanojiya')//add to x custom header
    console.log(req.headers);
    return res.json(users);
});

//URL using id


app.post('/api/users',async (req, res) => {
    const body=req.body;
    if(!body || !body.first_name || !body.last_name|| !body.email|| !body.gender|| !body.job_Title){
        return res.status(400).json({msg:"All Field are Required!"})
    }
    const result=await User.create({
        Firstname:body.first_name,
        Lastname:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_Title
    })
    // console.log('result',result);
    return res.status(201).json({msg:"sucess"});
})

app.route('/api/users/:id').get(async(req, res) => {
    const user=await User.findById(req.params.id);
    if(!user) return res.status(404).json({error:"User nor found!"})
    return res.json(user)
}).patch(async(req, res) => {
    // TODO: edit user with id
    await User.findByIdAndUpdate(req.params.id,{Lastname:"Changed"})
    return res.json({ status: "Success!" });

}).delete(async(req, res) => {
    // TODO: edit user with id
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: `data Delete success!` });
});




app.listen(port, () => console.log(`server started! ${port}`))
