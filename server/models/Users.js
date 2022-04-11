const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/** @public */
const UserSchema = new mongoose.Schema({
    email : {
        type : mongoose.Schema.Types.String,
        unique : true,
        required : true,
        lowercase : true
    },
    password : {
        type : mongoose.Schema.Types.String,
        required : true
    },
    projects : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'projects'
    }]
});

/** @public */
UserSchema.pre("save", function(next) {
    if (!this.isModified("password")) return next();
    bcrypt.hash(this.password, 10).then(hashedPassword => {
        this.password = hashedPassword;
        next();
    }, (oErr) => next(oErr));
});

/** @public
 *  @param {string} sPassword
 *  @param {function} next -> Callback function Local.js - comparePassword */
UserSchema.methods.comparePassword = function(sPassword, next) {
    /** @desc Compare password while signing in */
    bcrypt.compare(sPassword, this.password, (oErr, isMatch) => {
        if (oErr) next(oErr);
        else next(null, isMatch);
    });
}

module.exports = mongoose.model("User", UserSchema);