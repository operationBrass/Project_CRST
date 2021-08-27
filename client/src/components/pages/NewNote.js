import React, { useState } from 'react'
import { Button, Form, Container, Grid,Message, TableBody} from 'semantic-ui-react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import SideBar from '../SideBar'
import Heading from '../Header';
import { POST_NOTE } from '../../utils/noteMutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

function Post() {

    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");

    const [createNote, { error, data }] = useMutation(POST_NOTE);


    const onChange = (event) => {
       
        if (event.target === undefined) {
            return setBody(event.doc.getValue())
        }
        else {
            setTitle(event.target.value)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if (Auth.loggedIn) {
            let username = Auth.getProfile()
            username = username.data.username
            const newNote = {username:username, title:title,body:body}
            try {
                const { data } = await createNote({
                    variables: newNote,
                });
            } catch (e) {
                console.log(e);
            }
            console.log("errorrs")
        }
        else {
            throw new Error("not logged in");
        }
    };

    return (<div>
         {data ? <Message color="green">Note has been added<br></br><a href="/"> Click for Home </a> </Message> : <p></p>}    
            <Grid columns={2}>
            <Grid.Row>
            <Heading></Heading>
                <Grid.Column width={4}>
                    
                    <SideBar></SideBar>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Container text></Container>
        
                    <Container text> <Form>
        <Form.Field>
            <label>Title</label>
            <input name="title" onChange={onChange} value={title} placeholder='Title' />
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
    </Form></Container></Grid.Column></Grid.Row></Grid></div>)
}

export default Post