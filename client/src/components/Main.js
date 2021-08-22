import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import { Header, Message} from 'semantic-ui-react'

const RECORD = 0;

function Main() {

    const { loading, data,error }  = useQuery(FETCH_NOTES_QUERY);
    if (loading) return 'Loading...';
    if (error) return 'error....'
    const code = data.getNotes[RECORD].body;
   
    return (
        <div className="pusher bottom">
            <Header as='h4' attached='top'>
                <Message  >{data.getNotes[RECORD].title} </Message>
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
              
             
            {data.getNotes[RECORD].comments.map(comment=> {
                return <Message color="green" key={comment.id}>{comment.body}</Message>
            })}
                 
        </div>)
}

const FETCH_NOTES_QUERY = gql`
{
getNotes
{
  id
  body
  createdAt
  comments
  {
      id
      body
      createdAt
  }
}
}`

export default Main;