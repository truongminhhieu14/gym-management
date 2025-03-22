const express = require('express')

const router = express.Router()


// controller
const userRegisterController = require('../controller/users/userRegister')
const userSignInController = require('../controller/users/userSignIn')
const authMiddleware = require('../middleware/authMiddleware')
const userDetailsController = require('../controller/users/userDetails')


router.post("/register", userRegisterController)
router.post("/signin", userSignInController)
router.get("/user-details", authMiddleware, userDetailsController)


module.exports = router