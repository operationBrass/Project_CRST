import React, {useContext,useState, useMutation} from 'react'
import { Button, Form, } from 'semantic-ui-react'
import gql from 'graphql-tag';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import { AuthContext } from '../context/auth';

function Post(props) {
    const context = useContext(AuthContext);

    const [mycode, setMycode] = useState("");
    const [mytitle, setMytitle] = useState("");

    const onChange = (event) => {
        if (event.target.name === "title") setMytitle(event.target.value)
        else setMycode(event.doc.getValue());
    }

    
    const [addNote, { loading }] = useMutation(POST_NOTE, {
        update(proxy, result) { //proxy holds meta data. result is result and this runs if mutation was successful.
            props.history.push('/');
        },
        variables: {
            title: mytitle,
            body: mycode
        }
    });

    const onSubmit = (event) => {
        event.preventDefault();
        addNote({ variables: { title: mytitle} });

    }


    const code = "your code here";
    return (<div><Form>
        <Form.Field>
            <label>Title</label>
            <input name="title" placeholder='Title' />
        </Form.Field>

        <CodeMirror
            name="codeMirror"
            onChange={onChange}
                    options={{
                        theme: 'monokai',
                        keyMap: 'sublime',
                        mode: 'jsx',
                    }}
                    />
     <br/>
        <Button onClick={onSubmit} type='submit'>Submit</Button>
    </Form></div>)
}

const POST_NOTE = gql`

mutation createNote(
    $mytitle: String!
    $mycode: String!
){
    createNote(
        createNote: {
            title:$mytitle
            body:$mycode
        }
    ){
        id username createdAt token
    }
}`;

export default Post