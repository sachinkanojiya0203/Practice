const http = require('http');
const fs=require('fs')
const express = require('express')
const users = require('./user.json')
const port = 8000;

const app = express();

// using middleware - plugin
app.use(express.urlencoded({extended:false}))
// ROUTES

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((users) => `<li> ${users.first_name}</li>`).join("    ")}
    </ul>
    `
    res.send(html)
})

// Rest api

app.get('/api/users', (req, res) => {
    return res.json(users);
});

//URL using id


app.post('/api/users', (req, res) => {
    const body=req.body;
    users.push({...body, id:users.length+1});
    fs.writeFile("./user.json" ,JSON.stringify(users),(err,data)=>{

        // TODO: create new user
        return res.json({ status: "success",id:users.length});
    })
})

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(((users) => users.id === id));
    return res.json(user)
}).patch((req, res) => {
    // TODO: edit user with id
    return res.json({ status: "pending" });
}).delete((req, res) => {
    // TODO: edit user with id
    return res.json({ status: "pending" });
});




app.listen(port, () => console.log(`server started! ${port}`))
