const Note = require("../models/Note");


const resolvers = {
    Query: {
        getNotes: function () {
            return Note.find({});
        },
        getNote: function (parent, args) {
            return Note.findById(args.id)
        }
    },
    Mutation: {
        createNote: function (parent, args) {
            const note = new Note(args.noteInput);
            return note.save();
        },
        updateNote: function (parent, args) {
            return Note.findByIdAndUpdate(args.id, args.noteInput, { new: true });
            
        },
        deleteNote: function (parent, args) {
            return Note.findByIdAndDelete(args.id);
        }
    }
};

module.exports = resolvers;