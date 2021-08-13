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
        }
    }
}