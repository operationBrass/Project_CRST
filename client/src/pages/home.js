import React from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import MainMenu from '../components/menu'
import { Rail, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


function Home() {
    const { loading, data } = useQuery(FETCH_NOTES_QUERY)
    console.log(JSON.stringify(data)) //checking result of the query
    return (
       
        <Grid centered columns={3}>
        <Segment>
                
                <Rail position="left"> <MainMenu> </MainMenu> </Rail>
   
                <Grid.Column>
                <Segment>
                        <Header as="h2"> Code Snippet </Header>
                </Segment>
                        <textarea></textarea>
               
                <Segment>
                    <Header as="h3">Notes</Header>
                </Segment>
                </Grid.Column>
                <Rail position="right">   <h6> Logout </h6> </Rail>
            
        </Segment>
        </Grid>
       
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