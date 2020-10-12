const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

// Middleware
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Import Route
const weatherRoute = require('./routes/weather');

// Use View Engine
app.set('view engine', 'ejs');

// Middleware route
app.use('/', weatherRoute);

//login

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (res, req) => {
    const user = { name: req.body.name, password: req.body.password };
    users.push(user);
    res.static(201).send(user)
});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});