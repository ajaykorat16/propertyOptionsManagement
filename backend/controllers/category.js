const Category = require('../models/category')
const asyncHandler = require('express-async-handler')
const { validationResult } = require('express-validator');
const { capitalizeFLetter } = require("../helper/helper");
const Finishes = require('../models/finishes');

const createCategory = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, property } = req.body

        const newCategory = await new Category({ name: capitalizeFLetter(name), property }).save()
        res.status(201).send({
            error: false,
            message: "Category created successfully.",
            category: newCategory
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})

const updateCategory = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params
        const { name, property } = req.body

        const existingCategory = await Category.findById({ _id: id })
        if (!existingCategory) {
            return res.status(200).json({
                error: true,
                message: "Category is not existing."
            })
        }

        let updateData = {
            name: name ? capitalizeFLetter(name) : existingCategory.name,
            property: property ? property : existingCategory.property
        }

        const updateCategory = await Category.findByIdAndUpdate({ _id: id }, updateData, { new: true })
        return res.status(201).json({
            error: false,
            message: "Category updated successfully.",
            updateCategory
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})

const deleteCategory = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        const finishes = await Finishes.find({ category: id })
        if (finishes.length !== 0) {
            return res.status(200).json({
                error: true,
                message: "You can't delete this category as it associates with existing finishes."
            })
        }
        const existingCategory = await Category.findById({ _id: id })
        if (!existingCategory) {
            return res.status(200).json({
                error: true,
                message: "Category is not existing"
            })
        }

        await Category.findByIdAndDelete({ _id: id })

        return res.status(200).json({
            error: false,
            message: "Category deleted successfully.",
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})

const getCategoryList = asyncHandler(async (req, res) => {
    try {
        const { id } = req.query

        let category
        if (id) {
            category = await Category.find({ property: id })
        } else {
            category = await Category.find()
        }

        return res.status(200).json({
            error: false,
            message: "Category retrieved successfully.",
            category,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
});

const getSingleCategory = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params

        const existingCategory = await Category.findById({ _id: id })
        if (!existingCategory) {
            return res.status(200).json({
                error: true,
                message: "Category is not existing."
            })
        }

        const getSingle = await Category.findById({ _id: id })
        return res.status(200).json({
            error: false,
            message: "Single category is getting successfully.",
            getSingle
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server error');
    }
})


module.exports = { createCategory, updateCategory, deleteCategory, getSingleCategory, getCategoryList }