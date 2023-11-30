const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Active"
    },
    token: {
        type: String
    }
}, {
    timestamps: true,
});

userSchema.pre("save", function (next) {
    this.fullName = this.firstname + " " + this.lastname;
    next();
});
const Users = mongoose.model("User", userSchema);

module.exports = Users;
