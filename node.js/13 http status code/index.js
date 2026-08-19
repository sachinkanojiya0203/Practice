const http = require('http');
const fs=require('fs')
const express = require('express')
const users = require('./user.json');
const { error } = require('console');
const port = 8000;

const app = express();

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

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((users) => `<li> ${users.first_name}</li>`).join("")}
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


app.post('/api/users', (req, res) => {
    const body=req.body;
    if(!body || !body.first_name || !body.last_name|| !body.email|| !body.gender|| !body.job_Title){
        return res.status(400).json({msg:"All Field are Required!"})
    }
    users.push({...body, id:users.length+1});
    fs.writeFile("./user.json" ,JSON.stringify(users),(err,data)=>{

        // TODO: create new user
        return res.status(201). json({ status: "success",id:users.length});
    })
})

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(((users) => users.id === id));
    if(!user) return res.status(404).json({error:"User nor found!"})
    return res.json(user)
}).patch((req, res) => {
    // TODO: edit user with id
    return res.json({ status: "pending" });
}).delete((req, res) => {
    // TODO: edit user with id
    return res.json({ status: "pending" });
});




app.listen(port, () => console.log(`server started! ${port}`))
