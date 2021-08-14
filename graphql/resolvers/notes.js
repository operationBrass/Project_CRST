const Note = require('../../models/Note')

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
    }
}
