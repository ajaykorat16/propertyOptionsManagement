const Users = require("../models/user");
const nodemailer = require("nodemailer")
const { validationResult } = require("express-validator");
const { capitalizeFLetter } = require("../helper/helper");
const { promisify } = require('util');
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
    },
});

const resetPasswordURL = 'http://localhost:3000/reset-password';

const sendMailAsync = promisify(transporter.sendMail).bind(transporter);

const forgotPassword = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                error: true,
                message: 'Please provide a valid email for password reset.',
            });
        }

        const userData = await Users.findOne({ email });

        if (!userData) {
            return res.status(404).json({
                error: true,
                message: 'User not found. Please provide a valid email for password reset.',
            });
        }

        const { fullName, token } = userData;

        const mailOptions = {
            from: process.env.MAIL_FROM_EMAIL,
            to: email,
            subject: 'Password Reset',
            html: `<h5>Hello ${fullName},</h5> 
        <p>We have received a password reset request from you. Kindly click on this URL to reset your password. <a href="${resetPasswordURL}?token=${token}">Reset your password</a></p>`,
        };

        await sendMailAsync(mailOptions);

        res.status(200).json({
            error: false,
            message: 'Email sent successfully. Please check your email for further instructions.',
        });
    } catch (error) {
        console.error('Error in forgotPassword:', error);
        res.status(500).json({
            error: true,
            message: 'Internal server error. Please try again later.',
        });
    }
})

const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};

const comparePassword = async (password, hashPassword) => {
    try {
        return bcrypt.compare(password, hashPassword);
    } catch (error) {
        console.log(error);
    }
};

const createUser = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { firstname, lastname, email, password, phone, address } = req.body;

        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(200).json({
                error: true,
                message: "User already register with this email.",
            });
        }

        const existingPhone = await Users.findOne({ phone });
        if (existingPhone) {
            return res.status(200).json({
                error: true,
                message: "Phone Number should be unique.",
            });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await new Users({
            firstname: capitalizeFLetter(firstname),
            lastname: capitalizeFLetter(lastname),
            email,
            password: hashedPassword,
            phone,
            address
        }).save();

        return res.status(201).json({
            error: false,
            message: "User created successfully.",
            user: newUser,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: true, errors: errors.array() });
    }
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({ email }).select("-photo");
        if (!user) {
            return res.status(401).json({
                error: true,
                message: "Invalid Email. Please sign up first.",
            });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(401).json({
                error: true,
                message: "Invalid Password.",
            });
        }

        const token = await jwt.sign({ user }, process.env.JWT_SECRET_KEY, { expiresIn: "365 days", });
        return res.status(200).send({
            error: false,
            message: "Login successfully !",
            user,
            token,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Server error");
    }
});

const changePasswordController = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: true, errors: errors.array() });
    }
    try {
        const { token } = req.query;
        const { password } = req.body;

        const hashed = await hashPassword(password);
        await Users.findOneAndUpdate({ token: token }, { $set: { password: hashed } }, { new: true });
        res.status(200).send({
            error: false,
            message: "Password Reset Successfully.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: true,
            message: "Something went wrong",
            error,
        });
    }
});

module.exports = { createUser, loginUser, changePasswordController, forgotPassword }