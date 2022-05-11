const { Schools } = require("../models/Mongoose.js");

/** @public */
exports.create = async (req, res) => {
    Schools.create(req.body)
    .then(() => {
        res.status(200).json({
            success : true,
        });
    })
    .catch((oErr) => res.status(400).json({
        success: false,
        message: oErr.message
    }));
}

exports.find = async (req, res) => {
    Schools.find().maxTimeMS(10000).populate({
        path: "users"
    })
    .then((aSchools) => res.status(200).json({
        success : true,
        schools: aSchools,
    }))
    .catch((oErr) => res.status(400).json({
        success: false,
        message: oErr.message
    }))
}

/** @public */
exports.keyValidity = async (req, res) => {
    Schools.findOne({ key: req.body.key } )
    .then((oSchool) => res.status(200).json({
        success : oSchool === null,
        key: req.body.key
    }))
    .catch((oErr) => res.status(400).json({
        success: false,
        message: oErr.message
    }));
}