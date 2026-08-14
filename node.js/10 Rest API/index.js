const http=require('http');
const express=require('express')
const users=require('./user.json')
const port=8000;

const app=express();


// ROUTES

app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((users)=>`<li> ${users.first_name}</li>`).join("    ")}
    </ul>
    `
    res.send(html)
 })
 
 // Rest api

 app.get('/api/users',(req,res)=>{
     return res.json(users);
    });

//URL using id

app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(((users)=>users.id===id));
    return res.json(user)
})


app.listen(port,()=>console.log(`server started! ${port}`))