const { gql } = require("apollo-server");

module.exports = gql`
    type Note{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
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
   getNotes: [Note]
}
type Mutation{
    register(registerInput: RegisterInput): User!
}
`;