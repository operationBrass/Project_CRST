const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    notes: [
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

module.exports = model("Note", postSchema);