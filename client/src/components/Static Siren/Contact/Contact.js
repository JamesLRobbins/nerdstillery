import React from 'react';
import { Container, Grid, Divider, Button } from 'semantic-ui-react'

function StaticSirenContact() {
    return(
        <Container>
        <Divider section inverted/>
        <Grid centered className="contact" >
            <Grid.Row columns={1}>
                <Grid.Column fluid verticalAlign="middle">
                <h4><b>Social Media</b></h4> <br />
                    <Button circular color="facebook" icon="facebook large" href="https://www.facebook.com/Staticsiren" target="_blank" rel="noopener noreferrer"></Button>
                    {/* <Button circular color="instagram" icon="instagram large"></Button> */}
                    {/* <Button circular color="twitter" icon="twitter large"></Button> */}
                    <Button circular color="youtube" icon="youtube play large" href="https://www.youtube.com/playlist?list=PLwI5mUhAWmi1QutpTdhpCsgEH3MFMv3H7" target="_blank" rel="noopener noreferrer"></Button>
                    </Grid.Column>
                <Grid.Column fluid verticalAlign="middle">
                    <br />
                    <h4><b>Contact</b></h4>
                    <b>Booking/General Questions:</b> StaticSiren@gmail.com<br /> 
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )
}

export default StaticSirenContact;