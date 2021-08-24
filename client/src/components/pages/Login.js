import React, {useState} from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { LOGIN_USER } from '../../utils/noteMutations'
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';


function Login(props)
{
       // Here we set two state variables for firstName and lastName using `useState`
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const [login, {loading, data }] = useMutation(LOGIN_USER);

    const onChange = (event) => {
        //seems like a better way per mr 'Classed' examples
        setValues({...values,[event.target.name]:event.target.value})
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
              variables: { ...values },
            });
      
            Auth.login(data.login.token);

        } catch (e) {
        }
        
    }

    //semantic template sign in / registter form with modified event handling and modified styling etc.
    return (
        <div>
        <div className="ui divider"></div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                Login to Project-CRST
                    </Header>
                {data ? <Message color="blue">Successfully logged on<br></br><a href="/"> Return Home </a> </Message> : <p></p>}    
            <Form size='large'>
                <Segment>
                    <Form.Input name="username" value={values.username} onChange={onChange} fluid icon='user' iconPosition='left' placeholder='Username' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                    <Button onClick={onSubmit} color='blue' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                New Here? <a href='/register'>Sign up</a>
            </Message>
        </Grid.Column>
            </Grid>
            </div>
    );
}





export default Login;