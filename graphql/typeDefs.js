const { gql } = require("apollo-server");

module.exports = gql`
    type Note{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        comments: [Comment]! #return array even if empty
    },
    type Comment{
        id: ID!
        createdAt: String!
        username: String!
        body: String!
    }
    type User{
        id: ID!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput{
    username: String!
    password: String!
    confirmPassword: String!
    }

    type Query{
   getNotes: [Note] # get all notes
   getNote(noteId: ID!): Note # get a singe note. 
    }

    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username:String!,password: String!): User!
        createNote(body:String!): Note!
        deletePost(body:String!): String! # it does not matter what this returns as long it deletes..
        createComment(noteId:String!,body:String!): Note!
        deleteComment(noteId: ID!, commentId: ID!): Note!
    }
`;