const mongoose = require('mongoose');

/** @public */
const SchoolSchema = new mongoose.Schema({
    key: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.String,
        required: false
    },
    latitude: {
        type: mongoose.Schema.Types.Decimal128,
        required: false
    },
    longitude: {
        type: mongoose.Schema.Types.Decimal128,
        required: false
    },
    classTeacher: {
        type: mongoose.Schema.Types.Number,
        required: false
    },
    subjectTeacher: {
        type: mongoose.Schema.Types.Number,
        required: false
    },
    students: {
        type: mongoose.Schema.Types.Number,
        required: false
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model("School", SchoolSchema);