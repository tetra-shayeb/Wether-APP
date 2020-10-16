const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const db = require('./db');

// Middleware
app.use(express.static('Public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Import Route
const weatherRoute = require('./routes/weather');





// Use View Engine
app.set('view engine', 'ejs');








// Middleware route
app.use('/', weatherRoute);




