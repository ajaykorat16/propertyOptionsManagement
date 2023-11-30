const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { auth } = require("../middleware/auth")

const { createUser, loginUser, changePasswordController, forgotPassword } = require("../controllers/user")

router.post("/create",
    check('firstname', 'Firstname is required.').notEmpty(),
    check('lastname', 'Lastname is required.').notEmpty(),
    check('email', 'Please include a valid email.').isEmail(),
    check('password', 'Please enter a password with 6 or more characters.').isLength({ min: 6 }),
    check('phone', 'Phone number is required.').notEmpty(),
    check('address', 'Address is required.').notEmpty(),
    createUser
)

router.post("/login",
    check('email', 'Email is required.').isEmail(),
    check('password', 'Password is required.').notEmpty(),
    loginUser
)

router.post("/forgotPassword",
    check('email', 'Email is required.').isEmail(),
    forgotPassword
)

router.put("/resetPassword/",
    check('password', 'Please enter a password with 6 or more characters.').isLength({ min: 6 }),
    changePasswordController
)

module.exports = router    
