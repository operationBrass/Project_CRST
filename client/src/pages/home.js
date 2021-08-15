import React from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import MainMenu from '../components/menu'
import Comments from '../components/comments'
import { Rail, Form, Grid, Header, TextArea, Message, Segment } from 'semantic-ui-react'


function Home() {
    const { loading, data } = useQuery(FETCH_NOTES_QUERY)
    console.log(JSON.stringify(data)) //checking result of the queryS
    return (
       
        <Grid centered columns={2}>
        <Segment>
                
                <Rail position="left"> <MainMenu> </MainMenu> </Rail>
   
                <Grid.Column>
                <Segment>
                <Header as='h2' attached='top'>
      React-Framework
    </Header>
    <Segment attached>
  <p>by Brendan Lewis.. </p>
    </Segment>
                </Segment>
                <Form>
                <TextArea placeholder='Your code here' style={{ minHeight: 100 }} />
                </Form>
               
                <Segment>
                        <Header as="h3">Comments</Header>
                        </Segment>
                        <Comments></Comments>
                </Grid.Column>
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