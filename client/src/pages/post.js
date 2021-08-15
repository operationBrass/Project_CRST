import React, {useContext} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import MainMenu from '../components/menu'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import { AuthContext } from '../context/auth';




function Post(props) {
    const context = useContext(AuthContext);

    if (context === null)
    {
        props.history.push("/login");
    }
    
    const code = "your code here";
    return (<div><Form>
        <Form.Field>
            <label>Title</label>
            <input placeholder='Title' />
        </Form.Field>

        <CodeMirror
                    value={code}
                    options={{
                        theme: 'monokai',
                        keyMap: 'sublime',
                        mode: 'jsx',
                    }}
                    />
     <br/>
        <Button type='submit'>Submit</Button>
    </Form></div>)
}

export default Post