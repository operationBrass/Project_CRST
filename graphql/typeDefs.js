const { gql } = require("apollo-server");

module.exports = gql`
    type Note{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
type Query{
   getNotes: [Note]
}
`;