const { gql } = require('apollo-server-express');

module.exports = gql`
    type Note{
        _id: ID
        title: String!
        body: String!
        username: String!
        comments: [Comment] #return array even if empty
        createdAt: String!
    }
    type Comment{
        _id: ID
        body: String!
        username: String!
        createdAt: String!
    }
    type User{
        _id: ID
        username: String!
        password: String!
    }

    input NoteInput {
        title: String!
        body: String!
    }
    
    type Query{
        getNotes: [Note] # get all notes
        getNote(noteId: ID!): Note # get a singe note.
    }
    
    type Mutation {
        createNote(noteInput: NoteInput): Note
        deleteNote(_id: ID!): Note
        updateNote(_id: ID!, noteInput:NoteInput): Note
    }`;

