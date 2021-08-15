import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function Login()
{
       // Here we set two state variables for firstName and lastName using `useState`
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
     
    const onChange = (event) => {
        //each time the user changes a value in the textboxes this event is triggered
        //destructing the target object for name and value
        // [name] using the prop name to convert it into the name of the element who triggered
        const { name, value } = event.target;
        if (name === "username") return setUserName(value);
        else if (name === "password") return setPassword(value);
        else return setConfirmPass(value);
    };

    const onSubmit = () => {
        console.log(`${username}, ${password},${confirmPass}`);
    }
    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Register a new account
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input name="username" value={username} onChange={onChange} fluid icon='user' iconPosition='left' placeholder='Username' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                     <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Confirm Password'
                        type='password'
                        name='ConfirmPass'
                        value={confirmPass}
                        onChange={onChange}
                    />
                    <Button onClick={onSubmit} color='teal' fluid size='large'>
                        Register
                    </Button>
                </Segment>
            </Form>
            <Message>
                Already with us? <a href='/login'>Login</a>
            </Message>
        </Grid.Column>
    </Grid>
    );
}

export default Login;