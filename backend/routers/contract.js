const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const { getAllDocuments, getSingleContract, delelteContrats, trashContracts, restoreTrashDocuments, moveToTrash } = require('../controllers/contract');

router.get("/list", auth, getAllDocuments)

router.post("/search-contract", auth, getAllDocuments)

router.get("/trash/list", auth, trashContracts)

router.get("/getSingleContract/:id", auth, getSingleContract)

router.post("/search-contract", auth, getAllDocuments)

router.post("/move-to-trash", auth, moveToTrash)

router.put("/trash/restore", auth, restoreTrashDocuments)

router.delete("/delete", auth, delelteContrats)

module.exports = router;
