const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


require("dotenv").config();

//For hashing the password

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (req, hashedpass) => {
        if (err) {
            res.json({
                error: err
            })
        } let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedpass
        })
        user.save()
            .then(user => {
                res.json({
                    message: 'User Added Seuccessfully!'
                })
            })
            .catch(err => {
                res.json({
                    message: 'An err occures!'
                })
            })
    })


};

module.exports = { register }

