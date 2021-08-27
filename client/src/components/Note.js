import { Header, Message } from 'semantic-ui-react'
import { useQuery } from '@apollo/client';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import { GET_NOTES } from '../utils/noteQueries';
import { Button,Container,Icon} from 'semantic-ui-react'

function Note() {

   const { loading, data,error }  = useQuery(GET_NOTES);
    if (loading) return 'Loading...';
  if (error) return 'error....'

  const title = data.getNotes[0].title;
  const body = data.getNotes[0].body;

   
    return (

        <div className="pusher bottom">

            <Header as='h4' attached='top'>
          <Message>{title} by {username}</Message>
            </Header>
       
<CodeMirror
  value={body}
  options={{
    theme: 'monokai',
    keyMap: 'sublime',
    mode: 'jsx',
  }}
        />
  <br></br>
<Container textAlign="center">
        <Button color="inverted black" icon labelPosition='left'>
      Prev
      <Icon name='left arrow' />
    </Button>

<Button color="inverted black" icon labelPosition='right'>
      Next
      <Icon name='right arrow' />
          </Button>
          
</Container>

<Header as="h5">Comments</Header>
              
              {data.getNotes[0].comments.map(note => {
                  return <Message color="green" key={note.id}> {note.body} <br/> reply from {note.username} </Message>
              })}
                   
          </div>)
}

export default Note;

