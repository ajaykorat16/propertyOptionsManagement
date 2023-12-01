const mongoose = require("mongoose");

const contractSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    pdf: {
        type: String,
        required: true
    },
    isRead: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    isTrash: {
        type: Number,
        enum: [0, 1],
        default: 0
    }
}, {
    timestamps: true,
});

const Contract = mongoose.model("Contract", contractSchema);

module.exports = Contract;
