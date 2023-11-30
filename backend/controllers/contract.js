const Contract = require("../models/contract");
const fs = require("fs");
const mimeTypes = require('mime-types');
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { capitalizeFLetter } = require("../helper/helper");


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
        const { id, pdf } = req.body;

        const documentObj = { id };

        if (pdf) {
            const decodedDoc = decodeBase64File(pdf);

            if (decodedDoc instanceof Error) {
                return res.status(400).json({
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
            return res.status(400).json({
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

const getAllDocuments = asyncHandler(async (req, res) => {
    try {
        const filter = req.body.filter;

        let query = {};
        if (filter) {
            if (filter === "unread") {
                query.isRead = 0;
            } else if (filter === "read") {
                query.isRead = 1;
            }else{
                query = {}
            }
        }

        const getAllContracts = await Contract.find(query).lean();

        return res.status(200).json({
            error: false,
            message: "All Contracts retrieved successfully.",
            contracts: getAllContracts
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
        return res.status(200).json({
            error: false,
            message: "Single document getting successfully.",
            contract: {
                ...contract,
                pdf:`${DOMAIN}/documents/${contract.pdf}`
            },
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});


module.exports = { createDocuments, getAllDocuments, getSingleContract };
