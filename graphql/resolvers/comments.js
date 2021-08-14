const {UserInputError} = require("apollo-server");
const Note = require("../../models/Note");

const checkAuth = require("../../util/checkAuth")


module.exports = {
    Mutation: {
        createComment: async(parent,{noteId,body},context) => {
            const {username} = checkAuth(context)
            if(body.trim === "")
            {
                throw new UserInputError('Please type a comment first!',{
                    errors: {
                        body: "No Comment"
                    }
                })
            }
            const note = await Note.findById(noteId);
            if (note){
                note.comments.unshift({ //unshift is to put new comments ontop
                    body,
                    username,
                    createdAt: new Date().toISOString()
                });
                await note.save();
                return note;
            } else throw new UserInputError("Note not found");
        }
    }
}