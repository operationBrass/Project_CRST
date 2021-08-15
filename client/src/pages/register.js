import React, {useState} from 'react';
import { Button,Input, Container, Header } from 'semantic-ui-react';

function Register() {
    
// Here we set state variables using `useState`
  const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const onChange = (event) => {
        //each time the user changes a value in the textboxes this event is triggered
      //destructing the target object for name and value
        // [name] using the prop name to convert it into the name of the element who triggered
        const { name, value } = event.target;


        if (name === "username")return setUserName(value)
        else if (name === "password") return setPassword(value)
        else return setConfirmPass(value)
        
    }

    const onSubmit = () => {
        console.log(`${username}, ${password},${confirmPass}`);
    }

    const onBack = () => {
        console.log("user want back");
    }
    
        return (
            <Container textAlign="center" text>
                <Header as="h2"> Login </Header>
                <Input name="username" onChange={onChange}  value={username} placeholder="Username" fluid />
                <br/>
                <Input name="password" onChange={onChange} type="password" value={password} placeholder="Password" fluid />
                <br />
                <Input name="confirmPass" onChange={onChange} type="password" value={confirmPass} placeholder="Confirm Password" fluid />
                <br/>
                <Button onClick={onSubmit} primary>
                Login
                </Button>
                <Button secondary> 
                Back
                </Button>
            <p></p>
            </Container>
        )
}

export default Register;