import React, { useContext, useState } from 'react'
import {useMutation} from '@apollo/client';
import { Button, Form, Container, Grid} from 'semantic-ui-react'
import gql from 'graphql-tag';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import { AuthContext } from '../context/auth';
import Slidebar from '../components/Slidebar'

function Post(props) {
    const context = useContext(AuthContext);
    const [codebox, setCodebox] = useState("");
    const [title, setTitle] = useState("");

    const [addNote, { error }] = useMutation(POST_NOTE, {
        variables: {title:title,body:codebox},
        update(proxy, result) { //proxy holds meta data. result is result and this runs if mutation was successful.
            console.log(result.data)
        }
        
    });

    const onChange = (event) => {
       
        if (event.target === undefined) {
            return setCodebox(event.doc.getValue())
        }
        else {
            setTitle(event.target.value)
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addNote();

    }


    const code = "your code here";
    return (<div>
            <Grid columns={2}>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Slidebar></Slidebar>
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

const POST_NOTE = gql`

mutation createNote(
    $title: String!
    $codebox: String!
){createNote(title:$title,body:$codebox){
    id
    title
    body
    createdAt
    comments{
        id body createdAt
    }
}
}`
       

export default Post