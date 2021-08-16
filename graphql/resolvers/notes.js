const Note = require('../../models/Note');
const checkAuth = require("../../util/checkAuth");

module.exports = {
    Query:{
        async getNotes(){
            try
            {
                const notes = await Note.find();
                return notes;
            }catch(err){
                throw new Error(err);
            }
        },
        
        async getNote(parent,{noteId}){
            try{
                const note = await Note.findById(noteId);
                if(note){
                    return note;
                } else{
                    throw new error("note not found")
                }
            } catch(err){
                throw new Error(err);
            }
        }
    },
Mutation: {
    async createNote(parent,{body, title},context){
        //checking the user has valid token
        //if we make it past the above we have no errors 
        const addNote = new Note({
            title: body.title,
            body: body.body,
            //user: user.id,
            //username: user.username,
            createdAt: new Date().toISOString()
        });
        const note = await addNote.save();
        return note;
        },
        async deletePost(parent,{noteId},context){
            try{
                const note = await Note.findById(noteId)
                {
                    await note.delete();
                    return "Note has been deleted";
                }
            }catch(err){throw new Error(err)}        
        }
    }
}
// user logins gets a token and that needs to be in header of requests.