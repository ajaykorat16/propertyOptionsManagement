const Users = require("../models/user");
const { validationResult } = require("express-validator");
const { capitalizeFLetter } = require("../helper/helper");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
        const { employeeNumber, firstname, lastname, email, password, phone, address, dateOfBirth, dateOfJoining, } = req.body;

        const existingEmployeeNumber = await Users.findOne({ employeeNumber });
        if (existingEmployeeNumber) {
            return res.status(200).json({
                error: true,
                message: "Employee Number should be unique.",
            });
        }

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
            employeeNumber,
            firstname: capitalizeFLetter(firstname),
            lastname: capitalizeFLetter(lastname),
            email,
            password: hashedPassword,
            phone,
            address,
            dateOfBirth: dateOfBirth,
            dateOfJoining: dateOfJoining,
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
        const user = req.user._id;
        const { password } = req.body;

        const hashed = await hashPassword(password);
        await Users.findByIdAndUpdate(user, { password: hashed });
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

module.exports = { createUser, loginUser, changePasswordController }