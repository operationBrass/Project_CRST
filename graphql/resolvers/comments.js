const {AuthenticationError,UserInputError} = require("apollo-server-express");
const Note = require("../../models/Note");


module.exports = {
    Mutation: {
        createComment: async(parent,{noteId,body},context) => {
         
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
                    createdAt: new Date().toISOString()
                });
                await note.save();
                return note;
            } else throw new UserInputError("Note not found");
        },
        async deleteComment(parent,{noteId,commentId},context){
          
            const note = await Note.findById(noteId)
            if(note)
            {
                const commentToDelete = note.comments.findIndex(c => c.id === commentId)
                note.comments.splice(commentToDelete,1); // start at the comment index and delete 1 array element
                await note.save();
                return note;
            }else{
                throw new AuthenticationError("Error has occured"); // doesnt have a payload as not being returned to the client.
            }
        }
    }
}