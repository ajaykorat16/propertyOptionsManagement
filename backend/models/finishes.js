const mongoose = require("mongoose");

const finishesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: "Category",
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    photo:  {
        type: String
    },
}, {
    timestamps: true,
});

const Finishes = mongoose.model("Finishes", finishesSchema);

module.exports = Finishes;
