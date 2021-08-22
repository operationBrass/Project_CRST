const REGISTER_USER = gql`
mutation register(
    $username: String!
    $password: String!
    $confirmPass: String!
){
    register(
        registerInput: {
            username:$username
            password:$password
            confirmPassword:$confirmPass
        }
    ){
        id username createdAt token
    }
}`;

const POST_NOTE = gql`
mutation createNote(
    $title: String!
    $codebox: String!
){createNote(title:$title,body:$codebox){
    id
    title
    body
    createdAt
    comments{
        id body createdAt
    }
}
}`
       