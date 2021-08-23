import React from 'react'
import Heading from '../Header'
import Notes from '../Notes'
import SideBar from '../SideBar'
import { Container, Grid, Message, Header } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_NOTES } from '../../utils/noteQueries'


function Home() {

    const { loading, data } = useQuery(GET_NOTES);
    if (loading)
    {console.log("loading")}
    console.log(data);
    return (<div>
            <Grid columns={2}>
            <Grid.Row>
            <Heading></Heading>
                <Grid.Column width={4}>
                    
                    <SideBar></SideBar>
                </Grid.Column>
                <Grid.Column width={6}>
                  <br></br>
        
        <Container text> 
        
                        <Notes></Notes>

                            <br />
   </Container></Grid.Column></Grid.Row></Grid></div>);
}
export default Home;
