const { model, Schema } = require('mongoose');

const memberSchema = new Schema({
    username: String, 
    password: String
});

module.exports = model("User", memberSchema);