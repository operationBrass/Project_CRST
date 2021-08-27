import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation registerUser($username: String!, $password: String!) {
    registerUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const POST_NOTE = gql`
mutation createNote(
   $title: String!
   $body: String!
   $username: String!
){createNote(
    title:$title,
    body:$body,
    username:$username
){
  _id
  title
  body
  username
  createdAt
}
}`
       
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
