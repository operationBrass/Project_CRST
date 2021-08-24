const {Note, User} = require('../../models')
const { signToken } = require('../../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

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
        createNote: async function (parent, args,context) {

            console.log(context.user._id);
        const newNote = new Note({
            title: args.title,
            body: args.body,
            username: user.username,
            createdAt: new Date().toISOString()
        });
            
            const note = newNote.save();
            return note;

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
        registerUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password,context }) => {
            const user = await User.findOne({ username });
            
            if (!user) {
                throw new AuthenticationError('No user with this username found!');
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
        
            const token = signToken(user);
            
            return { token, user };
        },
    }
}

module.exports = resolvers;