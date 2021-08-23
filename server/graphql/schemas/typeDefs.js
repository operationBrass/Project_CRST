const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

    type Auth {
    token: ID!
    user: User
  }

    input NoteInput {
        title: String!
        body: String!
    }

    input CommentInput {
        body: String!
    }
    
    type Query{
        getNotes: [Note] # get all notes
        getNote(noteId: ID!): Note # get a singe note.

    }
    
    type Mutation {
        createNote(noteInput: NoteInput): Note
        createComment(commentInput: CommentInput): Note
        deleteComment(_id: ID): Note
        deleteNote(_id: ID): Note
        updateComment(_id: ID, commentInput: CommentInput): Note
        updateNote(_id: ID, noteInput:NoteInput): Note
        registerUser(username: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
    }`;

module.exports = typeDefs;