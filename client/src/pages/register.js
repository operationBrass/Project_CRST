import React, {useState} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { gql } from 'graphql-tag'
import { useMutation } from '@apollo/client'
function Login()
{
       // Here we set two state variables for firstName and lastName using `useState`
    const [values, setValues] = useState({
        username: "",
        password: "",
        confirmPass: "",
    });

    const onChange = (event) => {
        //seems like a better way per mr 'Classed' examples
        setValues({...values,[event.target.name]:event.target.value})
    };

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(proxy, result) { //proxy holds meta data. result is result and this runs if mutation was successful.
            console.log(result);
        },
        variables: values 
    });

    const onSubmit = (event) => {
        event.preventDefault();
        addUser()
    }



    //semantic template sign in / registter form with modified event handling and modified styling etc.
    return (
        <div>
        <div className="ui divider"></div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Register a new account
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
                     <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Confirm Password'
                        type='password'
                        name='confirmPass'
                        value={values.confirmPass}
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
            </div>
    );
}

//here we reference variables in the gql with $
const REGISTER_USER = gql`

mutation register(
    $username: String!
    $password: String!
    $confirmPass: String!
){
    register(
        registerInput: {
            username:$username
            password:$password
            confirmPassword:$confirmPass
        }
    ){
        id username createdAt token
    }
}`;

export default Login;