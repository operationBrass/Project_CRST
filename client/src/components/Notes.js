import gql from 'graphql-tag';
import { Header, Message } from 'semantic-ui-react'

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';



function Notes() {

    const code = 'const a = 0;';


   /* const { loading, data,error }  = useQuery(FETCH_NOTES_QUERY);
    if (loading) return 'Loading...';
    if (error) return 'error....'
    const code = data.getNotes[RECORD].body;*/
   
    return (

        <div className="pusher bottom">

            <Header as='h4' attached='top'>
                <Message  ></Message>
            </Header>
            
         
<CodeMirror
  value={code}
  options={{
    theme: 'monokai',
    keyMap: 'sublime',
    mode: 'jsx',
  }}
/>
            <Header as="h5">Comments</Header>
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

export default Notes;
