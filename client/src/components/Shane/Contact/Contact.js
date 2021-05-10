import React from 'react';
import { Button, Container, Grid, Divider } from 'semantic-ui-react'

function Contact() {
    return(
        <Container>
            <Divider section inverted/>
            <Grid centered className="contact">
                <Grid.Row columns={1}>
                    <Grid.Column verticalAlign="middle">
                    <h4><b>Social Media</b></h4> <br />
                        <Button icon="facebook large" color="facebook" href="https://www.facebook.com/SidneyVinsonPhotography" target="_blank" rel="noopener noreferrer"></Button>
                        <Button icon="instagram large" color="instagram" href="https://www.instagram.com/sidneyvinsonphotography/" target="_blank" rel="noopener noreferrer"></Button>
                        <Button icon="twitch large" color="violet" href="https://www.twitch.tv/sidundead86" target="_blank" rel="noopener noreferrer"></Button>
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