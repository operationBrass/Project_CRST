const { model, Schema } = require('mongoose');

const noteSchema = new Schema({
    title: String,
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
});

module.exports = model("Note", noteSchema);