import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

const NotFound = () => {
    return (
        <Container>
            <Grid>
                <Grid.Row centered>
            <h1 className="last-words">Page Not Found</h1>
            </Grid.Row>
            <Grid.Row centered>
            <img src='https://media.giphy.com/media/XjvtReNjyGjFm/giphy.gif' alt="Not Found"/>
            </Grid.Row>
            </Grid>
        </Container>
    )
}

export default NotFound
