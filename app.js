const express = require("express");
const app = express();
const bcrypt = require('bcrypt')
const db = require('./db');
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

const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword };
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});

app.post('/users/login', async (req, res) => {
    const user = users.find((u) =>
        u.name === req.body.name);


    if (!user) {
        return res.status(400).send('Cannot find user');
    };
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Succes')
        } else {
            res.send('not Allowed')
        }
    } catch {
        res.status(500).send()
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});