const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { auth } = require("../middleware/auth")

const { createFinishes, updateFinishes, getAllFinishes, getSingleFinishes, delelteFinishes } = require("../controllers/finishes")

router.get("/list", auth, getAllFinishes)

router.post("/search-finishes", auth, getAllFinishes)

router.post("/create",
    check('name', 'Finishes name is required.').notEmpty(),
    check('category', 'Finishes category is required.').notEmpty(),
    auth, createFinishes)

router.get("/getSingleFinishes/:id", auth, getSingleFinishes)

router.put("/update/:id", auth, updateFinishes)

router.delete("/delete/:id", auth, delelteFinishes)

module.exports = router