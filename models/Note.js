const { model, Schema } = require('mongoose');

const noteSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body:String,
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId, // allows us to use mongoose later for autopopulating this user field? 
        ref: 'users'
    }
});

module.exports = model("Note", noteSchema);