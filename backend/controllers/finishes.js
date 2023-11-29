const Finishes = require("../models/finishes");
const fs = require("fs");
const mimeTypes = require('mime-types');
const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const { capitalizeFLetter } = require("../helper/helper");

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (!matches || matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');

    return response;
}

const createFinishes = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, description, category, photo } = req.body;

        const finishesObj = {
            name: capitalizeFLetter(name),
            description: capitalizeFLetter(description),
            category
        };

        if (photo) {
            const decodedImg = decodeBase64Image(photo);
            const imageBuffer = decodedImg.data;
            const type = decodedImg.type;
            const extension = mimeTypes.extension(type) || 'png';
            const fileName = `${name}.${extension}`;

            const uploadPath = "./uploads/images/"
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            try {
                fs.writeFileSync(uploadPath + fileName, imageBuffer, 'utf8');
                finishesObj.photo = fileName;
            } catch (err) {
                console.error("Image upload error", err);
            }
        }

        const finishesName = await Finishes.findOne({ name: finishesObj.name });
        if (finishesName) {
            return res.status(200).json({
                error: true,
                message: "Finishes has already created.",
            });
        }

        const finishes = await Finishes.create(finishesObj);

        return res.status(201).json({
            error: false,
            message: "Finishes created successfully.",
            finishes,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

const getAllFinishes = asyncHandler(async (req, res) => {
    try {
        const getAllFinishes = await Finishes.find().lean();

        return res.status(200).json({
            error: false,
            message: "All Finishes retrieved successfully.",
            finishes: getAllFinishes.map(finish => {
                return {
                    ...finish,
                    photo: !finish.photo ? null : `${DOMAIN}/images/${finish.photo}`
                }
            }),
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error");
    }
});


const updateFinishes = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, description, category, photo } = req.body;
        const { id } = req.params;

        const existingFinishes = await Finishes.findById(id);
        if (!existingFinishes) {
            return res.status(404).json({
                error: true,
                message: "This finishes is not existing in the database.",
            });
        }

        const finishesObj = {
            name: name ? capitalizeFLetter(name) : existingFinishes.name,
            description: description ? capitalizeFLetter(description) : existingFinishes.description,
            category: category || existingFinishes.category,
            photo: photo || existingFinishes.photo
        };

        if (photo) {
            finishesObj.photo = {
                data: fs.readFileSync(photo.path),
                contentType: photo.type,
            };
        }

        const updatedFinishes = await Finishes.findByIdAndUpdate(id, finishesObj, { new: true, });

        return res.status(200).json({
            error: false,
            message: "Finishes updated successfully.",
            finishes: updatedFinishes,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

const getSingleFinishes = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const finishes = await Finishes.findById(id);
        return res.status(200).json({
            error: false,
            message: "Single finishes getting successfully.",
            finishes,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

const delelteFinishes = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;

        const existingFinishes = await Finishes.findById({ _id: id })
        if (!existingFinishes) {
            return res.status(400).json({
                error: true,
                message: "Finishes is not existing."
            })
        }

        await Finishes.findByIdAndDelete(id);
        return res.status(200).json({
            error: false,
            message: "Finishes deleted successfully.",
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = { createFinishes, updateFinishes, getAllFinishes, getSingleFinishes, delelteFinishes };
