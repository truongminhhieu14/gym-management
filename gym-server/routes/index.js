const express = require('express')

const router = express.Router()


// controller
const userRegisterController = require('../controller/users/userRegister')
const userSignInController = require('../controller/users/userSignIn')


router.post("/register", userRegisterController)
router.post("/signin", userSignInController)

module.exports = router