import React, {useState} from 'react'
import Main from '../components/Main'
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import Heading from '../components/Header'
import Slidebar from '../components/Slidebar';
import { Container, Grid } from 'semantic-ui-react';


function Home(props) {
    return (
        <div>
            <Container text>
            <Grid columns={2}>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Slidebar></Slidebar>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Container text>
                    <Main />
                    </Container>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
            </div>
    )
}


export default Home;