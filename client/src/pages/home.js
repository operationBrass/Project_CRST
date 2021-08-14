import React from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';


function Home() {
     const { loading, data } = useQuery(FETCH_NOTES_QUERY)
    console.log(data)
    return(
        <div> Home Page </div>
    )
}

const FETCH_NOTES_QUERY = gql`
{
getNotes{
    id
    body
    createdAt
    username
    comments
    {
        id
        body
        createdAt
        username
    }
}
}`

export default Home;