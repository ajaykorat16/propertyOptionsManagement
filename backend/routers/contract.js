const express = require('express');
const router = express.Router();
const multer = require('multer');
const { check } = require('express-validator');
const { auth } = require('../middleware/auth');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { createDocuments, getAllDocuments, getSingleContract } = require('../controllers/contract');

router.get("/list", auth, getAllDocuments)

router.get("/getSingleContract/:id", auth, getSingleContract)

router.post("/search-contract", auth, getAllDocuments)

router.post(
    '/create',
    [
        check('id', 'Id is required.').notEmpty(),
        check('pdf', 'Document is required.').notEmpty(),
        upload.single('pdf'), 
        auth,
    ],
    createDocuments
);

module.exports = router;
