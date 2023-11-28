const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    employeeNumber: {
        type: Number,
        required: true,
        unique: true,
    },
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
    dateOfBirth: {
        type: Date,
        require: true
    },
    dateOfJoining: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        default: "Active"
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
