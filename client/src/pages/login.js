import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


function Login()
{
       // Here we set two state variables for firstName and lastName using `useState`
       const [username, setUserName] = useState('');
       const [password, setPassword] = useState('');
     
    const onChange = (event) => {
        //each time the user changes a value in the textboxes this event is triggered
        //destructing the target object for name and value
        // [name] using the prop name to convert it into the name of the element who triggered
        const { name, value } = event.target;
        return name === 'username' ? setUserName(value) : setPassword(value);
    }

    const onSubmit = () => {
        console.log(`${username}, ${password}`);
    }
     //semantic template sign in / registter form with modified event handling and modified styling etc.
     return (
         <div>
        
        <div class="ui divider"></div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Log-in to your account
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
                    <Button onClick={onSubmit} color='teal' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='/register'>Sign Up</a>
            </Message>
        </Grid.Column>
            </Grid>
            </div>
    );
}

export default Login;