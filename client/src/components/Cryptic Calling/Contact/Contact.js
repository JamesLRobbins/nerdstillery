import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react'

function CrypticCallingContact() {
    return(
        <div>
            <h2 className="last-words">
                <Container>
                    Booking/General Questions - CrypticCallingBand@gmail.com<br />
                    <br />
                    Social Media<br />
                    <br />
                    <Button href="https://www.facebook.com/CrypticCalling/" color="facebook"><Icon name="facebook" />Facebook</Button>
                    <Button href="https://www.instagram.com/crypticcalling/" color="instagram"><Icon name="instagram" />Instagram</Button>
                    <Button href="https://twitter.com/crypticcalling" color="twitter"><Icon name="twitter" />Twitter</Button>
                    <Button href="https://www.youtube.com/user/Crypticcallingband" color="youtube"><Icon name="youtube" />Youtube</Button>

                </Container>
                
            </h2>
        </div>
    )
}

export default CrypticCallingContact;