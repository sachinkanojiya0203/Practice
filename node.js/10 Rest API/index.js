const http = require('http');
const express = require('express')
const users = require('./user.json')
const port = 8000;

const app = express();


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
    // TODO: create new user
    return res.json({ status: "pending" });
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