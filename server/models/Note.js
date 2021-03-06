  
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const noteSchema = new Schema({
    title: String, //shorthand for {type:string}
    body: String,
    username: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: Date,
        }
    ],
        createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
});

module.exports = model("Note", noteSchema);
//The first argument is the singular uppercase name of your database collection.
// The second argument is the schema which we defined above