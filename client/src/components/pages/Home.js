import React from 'react'
import Header from '../Header'
import Notes from '../Notes'
import SideBar from '../SideBar'
import { Container, Grid, Message} from 'semantic-ui-react';


function Home() {

    return (
        <div>
            <Header></Header>
            <Container text>
                <Grid columns={2}>
                    <Grid.Row>
                <Grid.Column width={4}>
                    <SideBar></SideBar>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Container text>
                    <Notes />
                    </Container>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Container>
            </div>);
}


export default Home;
