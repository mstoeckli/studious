const mongoose = require('mongoose');

/** @public */
const CustomizeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    tables: [{
        key: mongoose.Schema.Types.String,
        views: [{
            key: mongoose.Schema.Types.String,
            title: mongoose.Schema.Types.String,
            active: mongoose.Schema.Types.Boolean,
            columns: mongoose.Schema.Types.Array,
            order: mongoose.Schema.Types.Array
        }]
    }]
});

module.exports = mongoose.model("Customize", CustomizeSchema);