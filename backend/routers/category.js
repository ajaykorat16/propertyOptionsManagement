const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { auth } = require("../middleware/auth")

const { createCategory, updateCategory, deleteCategory, getSingleCategory, getCategoryList } = require("../controllers/category")

router.get("/list", auth, getCategoryList)

router.get("/getSingleCategory/:id", auth, getSingleCategory)

router.post("/create",
    check('name', 'Category name is required.').notEmpty(),
    check('property', 'Property is required.').notEmpty(),
    auth, createCategory)

router.put("/update/:id", auth, updateCategory)

router.delete("/delete/:id", auth, deleteCategory)

module.exports = router