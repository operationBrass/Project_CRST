
import { Header, Message } from 'semantic-ui-react'
import { useQuery } from '@apollo/client';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import { GET_NOTES } from '../utils/noteQueries';


function Notes() {

   const { loading, data,error }  = useQuery(GET_NOTES);
    if (loading) return 'Loading...';
  if (error) return 'error....'

    const code = data.getNotes[0].body;
   
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


export default Notes;
