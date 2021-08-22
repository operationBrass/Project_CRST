import { gql } from 'apollo-server-express'

const GET_NOTES = gql`
query getNotes {
    getNotes{
        _id
        title
        body
        comments
    }
}`;

const GET_NOTE = gql`
query getNote{
    getNote(_id:){
        _id
        title
        body
        comments
    }
}`

