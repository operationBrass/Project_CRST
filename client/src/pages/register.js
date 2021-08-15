import React from 'react';
import { Button,Input, Container, Header } from 'semantic-ui-react';

class Register extends React.Component {

    state = {
        username: "",
        password: "",
        confirmPass: ""
    };

    onChange = (event) => {
        //each time the user changes a value in the textboxes this event is triggered
        const { name, value } = event.target; //destructing the target object for name and value
        // [name] using the prop name to convert it into the name of the element who triggered
        this.setState({ [name]: value });
    }

    onSubmit = () => {
        console.log(this.state);
    }

    render() {
        const {username, password,confirmPass} = this.state
        return (
            <Container textAlign="center" text>
                <Header as="h2"> Register </Header>
                <Input name="username" onChange={this.onChange}  value={username} placeholder="Username" fluid />
                <br/>
                <Input name="password" onChange={this.onChange} type="password" value={password} placeholder="Password" fluid />
                <br/>
                <Input name="confirmPass" onChange={this.onChange} type="password" value={confirmPass} placeholder="Confirm Password" fluid />
                <br/>
                <Button onClick={this.onSubmit} primary>
                Register
                </Button>
                <Button secondary> 
                Back
                </Button>
            <p></p>
            </Container>
        )
    }
}

export default Register;