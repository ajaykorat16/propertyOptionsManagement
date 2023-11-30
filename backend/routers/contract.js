const express = require('express');
const router = express.Router();
const multer = require('multer');
const { check } = require('express-validator');
const { auth } = require('../middleware/auth');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const { createDocuments, getAllDocuments, getSingleContract, delelteContrats, trashContracts, restoreTrashDocuments, moveToTrash } = require('../controllers/contract');

router.get("/list", auth, getAllDocuments)

router.post("/search-contract", auth, getAllDocuments)

router.get("/trash/list", auth, trashContracts)

router.get("/getSingleContract/:id", auth, getSingleContract)

router.post("/search-contract", auth, getAllDocuments)

router.post("/move-to-trash", auth, moveToTrash)

router.put("/trash/restore", auth, restoreTrashDocuments)

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

router.delete("/delete", auth, delelteContrats)

module.exports = router;
