import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import { Header, Message} from 'semantic-ui-react'


function Main() {

    const { loading, data,error }  = useQuery(FETCH_NOTES_QUERY);
    if (loading) return 'Loading...';
    if (error) throw new Error("error while retrieving comments");
    const code = data.getNotes[0].body;

    return (
        <div className="pusher bottom">
            <Header as='h4' attached='top'>
                <Message>{data.getNotes[0].username} </Message>
            </Header>
            
            <CodeMirror
                value={code}
                options={{
                    theme: 'monokai',
                    keyMap: 'sublime',
                    mode: 'jsx',
                    lineHeight: '20px',
                    minLines: '50'
                }}
            />
            <Header as="h5">Comments</Header>
              
             
            {data.getNotes[0].comments.map(note => {
                return <Message color="green" key={note.id}>{note.body}</Message>
            })}
                 
        </div>)
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

export default Main;