import React from 'react';
import { Button, Icon, Container } from 'semantic-ui-react'

function Contact() {
    return(
        <Container className="about">
        
            Website issues - JamesLRobbins86@gmail.com<br />
            General Questions - Nerdstillery@gmail.com<br />
            <br />
            <Button href="https://www.facebook.com/Nerdstillery/" color="facebook"><Icon name="facebook" />Facebook</Button>
            <Button href="https://www.instagram.com/Nerdstillery/" color="instagram"><Icon name="instagram" />Instagram</Button>
            <Button href="https://www.twitter.com/Nerdstillery/" color="twitter"><Icon name="twitter" />Twitter</Button>
            <Button href="https://www.youtube.com/Nerdstillery/" color="youtube"><Icon name="youtube" />Youtube</Button>

            
       </Container> 
    )
}

export default Contact;