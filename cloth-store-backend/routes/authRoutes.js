const express = require('express')

const {registerUser, loginUser} = require('../controllers/authController')

const Router = express.Router()

Router.route('/join').post(registerUser)
Router.route('/login').post(loginUser)

module.exports = Router



