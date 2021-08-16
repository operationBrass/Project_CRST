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
    async createNote(parent,{body},context){
        
        //checking the user has valid token
        const user = checkAuth(context);
      
        //if we make it past the above we have no errors 
        const newNote = new Note({
            body: user.body,
            title: user.title,
            username: user.username,
            createdAt: new Date().toISOString()
        });
        const note = newNote.save();
        return note;
        },
        async deletePost(parent,{noteId},context){
            const user = checkAuth(context);
            try{
                const note = await Note.findById(noteId)
                if(user.username === note.username){
                    await note.delete();
                    return "Note has been deleted";
                }
                else
                {
                    throw new Error("user not associated with note.")
                }
            }catch(err){throw new Error(err)}        
        }
    }
}
// user logins gets a token and that needs to be in header of requests.