import React, { useState } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { REGISTER_USER } from '../../utils/noteMutations'
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';


function Register()
{
       // Here we set two state variables for firstName and lastName using `useState`
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const [registerUser, { error, data }] = useMutation(REGISTER_USER);

    const onChange = (event) => {
        //seems like a better way per mr 'Classed' examples
        setValues({...values,[event.target.name]:event.target.value})
    };

    const onSubmit = async (event) => {
        event.preventDefault();
    console.log(values)
        try {
          const { data } = await registerUser({
            variables: { ...values },
          });
    
          Auth.login(data.registerUser.token);
        } catch (e) {
          console.error(e);
        }
    };
    
    //semantic template sign in / registter form with modified event handling and modified styling etc.
    return (
        <div>
        <div className="ui divider"></div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='orange' textAlign='center'>
                 Register a new account
                    </Header>
                    {data ? <Message color="orange">Successfully registered<br></br><a href="/"> Click for Home </a> </Message> : <p></p>}    
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
                    <Button onClick={onSubmit} color='orange' fluid size='large'>
                        Register
                    </Button>
                </Segment>
            </Form>
            <Message>
                Already with us? <a href='/login'>Login</a>
            </Message>
        </Grid.Column>
            </Grid>
            </div>
    );
}

export default Register;