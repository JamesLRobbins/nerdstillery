import React from 'react';
import { Button,Container, Grid, Divider } from 'semantic-ui-react'

function Contact() {
    return(
        <Container>
            <Divider section inverted/>
            <Grid centered className="contact" >
                <Grid.Row columns={1}>
                    <Grid.Column fluid verticalAlign="middle">
                    <h4><b>Social Media</b></h4> <br />
                        <Button circular color="facebook" icon="facebook large" href="https://www.facebook.com/Nerdstillery/" target="_blank" rel="noopener noreferrer"></Button>
                        <Button circular color="instagram" icon="instagram large" href="https://www.instagram.com/nerdstillery/" target="_blank" rel="noopener noreferrer"></Button>
                        <Button circular color="twitter" icon="twitter large" href="https://twitter.com/nerdstillery" target="_blank" rel="noopener noreferrer"></Button>
                        <Button circular color="youtube" icon="youtube play large" href="https://www.youtube.com/nerdstillery" target="_blank" rel="noopener noreferrer"></Button>
                        </Grid.Column>
                    <Grid.Column fluid verticalAlign="middle">
                        <br />
                        <h4><b>Contact</b></h4>
                        <b>Website issues:</b> JamesLRobbins86@gmail.com<br />
                        <b>General Questions:</b> Nerdstillery@gmail.com   
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Contact;