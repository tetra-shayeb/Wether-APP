const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


require("dotenv").config();

//For hashing the password

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashedpass) => {
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

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({ $or: [{ email: username }, { phone: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    
                })
            } else {
                res.json({
                    message: 'No user found'
                })
            }
        })

}

module.exports = { register }

