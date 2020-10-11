const express = require("express");
const app = express();
const wetherRoute = require('./routes/weather');
require("dotenv").config();
// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Import Route
const weatherRoute = require('./routes/weather');

// Use View Engine
app.set('view engine', 'ejs');

// Middleware route
app.use('/', weatherRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});