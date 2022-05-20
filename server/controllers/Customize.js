const { Customize } = require("../models/Mongoose.js");

/** @public */
exports.create = async (req, res) => {
    Customize.findOne({ user: req.body.user })
    .then((oCustomize) => {
        /** @desc No default entry found */
        if (oCustomize === null) {
            Customize.create(req.body)
                .then((oCustomize) => res.status(200).json({
                    success : true,
                    oCustomize
                }))
                .catch((oErr) => res.status(400).json({
                    success: false,
                    message: oErr.message
                }));
        } else return res.status(200).json({
            success: true,
            oCustomize
        });
    })
    .catch((oErr) => res.status(400).json({
        success: false,
        message: oErr.message
    }))
}

exports.find = async (req, res) => {
    // Customize.find().maxTimeMS(10000).populate({
    //     path: "users"
    // })
    // .then((a,b,c) => res.status(200).json({
    //     success: true,
    // }))
    // .catch((oErr) => res.status(400).json({
    //     success: false,
    //     message: oErr.message
    // }))
}