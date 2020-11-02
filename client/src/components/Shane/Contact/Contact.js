import React from 'react';
import { Button, Icon, Container, Grid, Divider } from 'semantic-ui-react'

function Contact() {
    return(
        <Container>
            <Divider section inverted/>
            <Grid centered className="contact">
                <Grid.Row columns={1}>
                    <Grid.Column fluid verticalAlign="middle">
                    <h4><b>Social Media</b></h4> <br />
                    <Button color='facebook' size="tiny">
                        <Icon name='facebook' /> <a href="https://www.facebook.com/SidneyVinsonPhotography/">Facebook</a>
                    </Button>  
                    <Button color='instagram' size="tiny">
                        <Icon name='instagram' /> <a href="https://www.instagram.com/sidneyvinsonphotography/">Instagram</a>
                    </Button>
                        </Grid.Column>
                    <Grid.Column fluid verticalAlign="middle">
                        <br />
                        <h4><b>Contact</b></h4> <br />
                        <b>Email:</b> sidneyvinsonphotography@gmail.com<br />
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Contact;