import React from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import MainMenu from '../components/menu'
import { Rail, Form, Grid, Header, TextArea, Message, Segment } from 'semantic-ui-react'


function Home() {
    const { loading, data,error }  = useQuery(FETCH_NOTES_QUERY);
    if (loading) return 'Loading...';
    if (error) throw new Error("error while retrieving comments");
    return (
       
        <Grid centered columns={2}>
        <Segment>
                
                <Rail position="left"> <MainMenu> </MainMenu> </Rail>
   
                <Grid.Column>
                <Segment>
                <Header as='h2' attached='top'>
      
    </Header>
    <Segment attached>
  <p>by Brendan Lewis.. </p>
    </Segment>
                </Segment>
                <Form>
                        <TextArea placeholder='Your code here' style={{ minHeight: 100, minWidth: 300}} />
                </Form>
               
                <Segment>
                        <Header as="h3">Comments</Header>
                    </Segment>
                    <Grid.Row>
                        {data.getNotes[0].comments.map(note => {
                            return <Message color="red" key={note.id}>{note.body}</Message>
                        })}
                        </Grid.Row>

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