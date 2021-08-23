const Note = require("../../models/Note");
const { signToken } = require('../../utils/auth');


const resolvers = {
    Query: {
        getNotes: function () {
            return Note.find({});
        },
        getNote: function (parent, args) {
            return Note.findById(args._id)
        }
    },
    Mutation: {
        createNote: async function (parent, args) {
            const note = await new Note(args.noteInput);
            return note.save();
        },
        updateNote: function (parent, args) {
            return Note.findByIdAndUpdate(args._id, args.noteInput, { new: true });
            
        },
        deleteNote: function (parent, args) {
            return Note.findByIdAndDelete(args._id);
        },
        createComment: function (parent, args) {
            return Note.findByIdAndUpdate(args._id, args.commentInput, { new: true });
        },
        addUser: async (parent, { name, password }) => {
            const user = await User.create({ name, password });
            const token = signToken(profile);
            return { token, user };
        }
    }
}

module.exports = resolvers;