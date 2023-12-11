const express = require('express');
const router = express.Router();
const multer = require('multer');
const { check } = require('express-validator');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { getAllFinishes } = require("../controllers/finishes")
const { createDocuments } = require('../controllers/contract');
const { getCategoryList } = require('../controllers/category');
const { getProperties } = require('../controllers/property');

router.get("/finishes/list", getAllFinishes)

router.get("/category/list", getCategoryList)

router.get("/property/list", getProperties)

router.post(
    '/contract/create',
    [
        check('id', 'Id is required.').notEmpty(),
        check('pdf', 'Document is required.').notEmpty(),
        check('property', 'Property is required.').notEmpty(),
        upload.single('pdf'),
    ],
    createDocuments
);

module.exports = router;
