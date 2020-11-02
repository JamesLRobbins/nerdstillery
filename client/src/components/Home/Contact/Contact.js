import React from 'react';
import { Button, Icon, Container, Grid, Divider } from 'semantic-ui-react'

function Contact() {
    return(
    //     <Container>
    //         <Grid columns={2} className="contact">
    //             <Grid.Row>
    //                 <Grid.Column>
    //                     <h4><b>Social Media</b></h4> <br />
    //                     <a href="https://www.facebook.com/Nerdstillery/" color="facebook"><Icon name="facebook" />Facebook</a><br />
    //                     <a href="https://www.instagram.com/Nerdstillery/" color="instagram"><Icon name="instagram" />Instagram</a><br />
    //                     <a href="https://www.twitter.com/Nerdstillery/" color="twitter"><Icon name="twitter" />Twitter</a><br />
    //                 </Grid.Column>
    //                 <Grid.Column>
    //                     <h4><b>Contact</b></h4> <br />
    //                     <b>Website issues:</b> JamesLRobbins86@gmail.com<br />
    //                     <b>General Questions:</b> Nerdstillery@gmail.com<br />
    //                 </Grid.Column>
    //             </Grid.Row>
    //         </Grid> 
    //    </Container> 

        <Container>
            <Divider section inverted/>
            <Grid centered className="contact">
                <Grid.Row columns={1}>
                    <Grid.Column fluid verticalAlign="middle">
                    <h4><b>Social Media</b></h4> <br />
                        <Button color="facebook" size="tiny"><a href="https://www.facebook.com/Nerdstillery/" color="facebook"><Icon name="facebook" />Facebook </a></Button>  
                        <Button color="instagram" size="tiny"><a href="https://www.instagram.com/Nerdstillery/" color="instagram"><Icon name="instagram" />Instagram </a></Button>
                        <Button color="twitter" size="tiny"><a href="https://www.twitter.com/Nerdstillery/" color="twitter"><Icon name="twitter" />Twitter</a></Button>
                        </Grid.Column>
                    <Grid.Column fluid verticalAlign="middle">
                        <br />
                        <h4><b>Contact</b></h4> <br />
                        <b>Website issues:</b> JamesLRobbins86@gmail.com<br />
                        <b>General Questions:</b> Nerdstillery@gmail.com<br />
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Contact;