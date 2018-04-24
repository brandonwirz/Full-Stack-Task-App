const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    name: String,
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
})


userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, function (err, isMatch) {
        if (err) return callback(err);
        else callback(null, isMatch);
    });
};

userSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model("User", userSchema);
