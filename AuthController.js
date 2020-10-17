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
        } else {

            let user = new User({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: hashedpass
                
            })
            console.log(1,user)
            user.save()
                .then(user => {
                    res.json({
                        message: 'User Added Seuccessfully!'
                    })
                })
                .catch(err => {
                    console.log(1,err)
                    res.json({
                        message: 'An err occures!'
                    })



                })
        }


    })


};

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({ $or: [{ email: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'VerySecretValue', { expiresIn: '1h' })
                        res.json({
                            message: 'Login Successful!',
                            token
                        })
                    } else {
                        res.json({ message: 'Password does not matched!' })
                    }
                })
            } else {
                res.json({
                    message: 'No user found'
                })
            }
        })

}

module.exports = {
    register, login
}

