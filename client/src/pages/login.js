import React, {useContext, useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { gql } from 'graphql-tag'
import { useMutation } from '@apollo/client'
import {AuthContext} from '../context/auth'

function Login(props)
{
    const context = useContext(AuthContext)
       // Here we set two state variables for firstName and lastName using `useState`
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const onChange = (event) => {
        //seems like a better way per mr 'Classed' examples
        setValues({...values,[event.target.name]:event.target.value})
    };

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, result) { //proxy holds meta data. result is result and this runs if mutation was successful.
            context.login(result.data.token)
            props.history.push('/');
        },
        variables: values 
    });

    const onSubmit = (event) => {
        event.preventDefault();
        loginUser()
    }



    //semantic template sign in / registter form with modified event handling and modified styling etc.
    return (
        <div>
        <div className="ui divider"></div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Login
            </Header>
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
                    <Button onClick={onSubmit} color='teal' fluid size='large'>
                        Register
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

//here we reference variables in the gql with $
const LOGIN_USER = gql`

mutation login(
    $username: String!
    $password: String!
){
    login(
            username:$username
            password:$password
    ){
        id username createdAt token
    }
}`;

export default Login;