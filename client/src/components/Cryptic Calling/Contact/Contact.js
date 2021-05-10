import React from 'react';
import { Container, Button, Grid, Divider } from 'semantic-ui-react'

function CrypticCallingContact() {
    return(
        <div>
            <Container>
            <Divider section inverted/>
            <Grid centered className="contact" >
                <Grid.Row columns={1}>
                    <Grid.Column verticalAlign="middle">
                    <h4><b>Social Media</b></h4> <br />
                        <Button circular color="facebook" icon="facebook large" href="https://www.facebook.com/CrypticCalling" target="_blank" rel="noopener noreferrer"></Button>
                        <Button circular color="instagram" icon="instagram large" href="https://www.instagram.com/crypticcalling/" target="_blank" rel="noopener noreferrer"></Button>
                        <Button circular color="twitter" icon="twitter large" href="https://twitter.com/crypticcalling" target="_blank" rel="noopener noreferrer"></Button>
                        <Button circular color="youtube" icon="youtube play large" href="https://www.youtube.com/playlist?list=PLwI5mUhAWmi0y75mLbzQsYTtCHAF8dXx0" target="_blank" rel="noopener noreferrer"></Button>
                        </Grid.Column>
                    <Grid.Column fluid verticalAlign="middle">
                        <br />
                        <h4><b>Contact</b></h4>
                        <b>Booking/General Questions:</b> CrypticCallingBand@gmail.com<br /> 
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </div>
    )
}

export default CrypticCallingContact;