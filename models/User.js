const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    CreatedAt: String,
});

module.exports = model("User", userSchema);