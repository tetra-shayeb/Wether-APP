const express = require('express');
const router = express.Router();

const AuthController = require('../AuthController')


router.post('/api/register', AuthController.register)

module.exports = router;