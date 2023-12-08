const Contract = require("../models/contract");
const fs = require("fs");
const mimeTypes = require('mime-types');
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { formattedDate } = require("../helper/helper");


function decodeBase64File(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (!matches || matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');

    return response;
}

const createDocuments = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id, pdf, property } = req.body;

        const documentObj = { id, property };

        if (pdf) {
            const decodedDoc = decodeBase64File(pdf);

            if (decodedDoc instanceof Error) {
                return res.status(200).json({
                    error: true,
                    message: 'Invalid PDF data string',
                });
            }

            const docBuffer = decodedDoc.data;
            const type = decodedDoc.type;
            const extension = mimeTypes.extension(type) || 'pdf';
            const fileName = `${id}.${extension}`;

            const uploadPath = "./uploads/documents/"
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            try {
                fs.writeFileSync(uploadPath + fileName, docBuffer, 'utf8');
                documentObj.pdf = fileName;
            } catch (err) {
                console.error("Document upload error", err);
            }
        } else {
            return res.status(200).json({
                error: true,
                message: 'PDF field is required.',
            });
        }

        const documentName = await Contract.findOne({ id: documentObj.id });
        if (documentName) {
            return res.status(200).json({
                error: true,
                message: "Document has already been created.",
            });
        }

        const newDocument = await Contract.create(documentObj);

        return res.status(201).json({
            error: false,
            message: "Document created successfully.",
            document: newDocument,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

function generateQuery(filter) {
    const query = {};

    const { readFilter, property } = filter

    if (readFilter) {
        if (readFilter === "unread") {
            query.isRead = 0;
        } else if (readFilter === "read") {
            query.isRead = 1;
        }
    }

    if (property) {
        query.property = property;
    }

    return query
}

const getAllDocuments = asyncHandler(async (req, res) => {
    try {
        const filter = req.body.filter;
        const sortField = req.body.sortField || 'createdAt'

        let query = {};
        if (typeof filter !== 'undefined') {
            query = generateQuery(filter);
        }

        const getAllContracts = await Contract.find({ ...query, isTrash: 0 }).sort({ [sortField]: -1 }).lean();

        return res.status(200).json({
            error: false,
            message: "All Contracts retrieved successfully.",
            contracts: getAllContracts.map(contract => {
                return {
                    ...contract,
                    pdf: `${DOMAIN}/documents/${contract.pdf}`,
                    createdAt: formattedDate(contract.createdAt)
                }
            }),
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error");
    }
});

const trashContracts = asyncHandler(async (req, res) => {
    try {

        const getTrashContracts = await Contract.find({ isTrash: 1 }).lean();

        return res.status(200).json({
            error: false,
            message: "All trash contracts retrieved successfully.",
            contracts: getTrashContracts.map(contract => {
                return {
                    ...contract,
                    pdf: `${DOMAIN}/documents/${contract.pdf}`,
                    createdAt: formattedDate(contract.createdAt)
                }
            }),
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error");
    }
});

const getSingleContract = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const contract = await Contract.findById(id).lean();
        if (!contract) {
            return res.status(200).json({
                error: true,
                message: "Document Not Found.",
            });
        }

        await Contract.updateOne({ _id: id }, { $set: { isRead: 1 } }, { new: true });

        return res.status(200).json({
            error: false,
            message: "Single document getting successfully.",
            contract: {
                ...contract,
                pdf: `${DOMAIN}/documents/${contract.pdf}`
            },
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

const delelteContrats = asyncHandler(async (req, res) => {
    try {
        const contracts = req.body.contracts;

        if (!Array.isArray(contracts)) {
            return res.status(200).json({
                error: true,
                message: "Invalid contracts format. Expecting an array.",
            });
        }

        const contractsDelete = await Contract.deleteMany({ _id: { $in: contracts } })
        if (contractsDelete.deletedCount > 0) {
            return res.status(200).json({
                error: false,
                message: "Contracts deleted successfully.",
            });
        } else {
            return res.status(200).json({
                error: true,
                message: "Error in contract delete.",
            });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

const restoreTrashDocuments = asyncHandler(async (req, res) => {
    try {
        const contracts = req.body.contracts;

        if (!Array.isArray(contracts)) {
            return res.status(200).json({
                error: true,
                message: "Invalid contracts format. Expecting an array.",
            });
        }

        const contractsRestore = await Contract.updateMany({ _id: { $in: contracts } }, { $set: { isTrash: 0 } }, { new: true })
        if (contractsRestore) {
            return res.status(200).json({
                error: false,
                message: "Contracts Restore successfully.",
            });
        } else {
            return res.status(200).json({
                error: true,
                message: "Error in contract restore.",
            });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

const moveToTrash = asyncHandler(async (req, res) => {
    try {
        const { id } = req.body;

        const movetoTrash = await Contract.updateOne({ _id: id }, { $set: { isTrash: 1 } }, { new: true });
        if (movetoTrash) {
            return res.status(200).json({
                error: false,
                message: "Contracts move to trash successfully.",
            });
        } else {
            return res.status(200).json({
                error: true,
                message: "Error in contract trash.",
            });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = { createDocuments, getAllDocuments, getSingleContract, delelteContrats, trashContracts, restoreTrashDocuments, moveToTrash };
