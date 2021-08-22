import React, { useState } from 'react'
import { Button, Form, Container, Grid, Header} from 'semantic-ui-react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import SideBar from '../SideBar'
import Heading from '../Header';

function Post() {

    const [codebox, setCodebox] = useState("");
    const [title, setTitle] = useState("");


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

    }


    const code = "your code here";
    return (<div>
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