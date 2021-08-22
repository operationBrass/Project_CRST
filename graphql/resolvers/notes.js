const Note = require('../../models/Note');

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
        const addNote = new Note({
            title: body.title,
            body: body.body,
            user: user.id,
            username: user.username,
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