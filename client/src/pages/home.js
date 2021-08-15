import React from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';



function Home() {
    const { loading, data } = useQuery(FETCH_NOTES_QUERY)
    console.log(JSON.stringify(data)) //checking result of the query
    return(
        <div><h1>Home</h1> </div>
    )
}

const FETCH_NOTES_QUERY = gql`
{
getNotes
{
  id
  body
  username
  createdAt
  comments
  {
      id
      body
  }
}
}`

export default Home;