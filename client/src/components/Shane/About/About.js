import React from 'react';
import { Image, Container } from 'semantic-ui-react';

function ShaneAbout() {
    return(
        <Container className="shane-about" textAlign="left">
            <Image src={require("../../../images/sidVinAbout.jpg")} floated="left" size="small"/>
            <p>As the official photographer for Nerdstillery, Shane attended school at Nossi College of Art in Nashville.  
                After his grandfather gifted him an old Kodak Brownie Hawkeye camera, Shane developed a love for vintage cameras which eventually turned 
                into a passion for photography.  With an active interest in cosplay, one of Shane’s biggest influences is Martin Wong Photography.  
                Which he states is what motivates him to continue to develop his craft</p>

                <p>Aside from cosplay, Shane enjoys being a diverse photography and has built up an impressive portfolio that includes boudoir, 
                    maternity, family, etc.  Over the years, Shane has had his work published in 2 small magazines, and also enjoys being the Head 
                    Photographer for the Middle Tennessee Anime Convention (MTAC).  Please feel free to reach out for more information and session rate.</p>

                    <p>When not working photography, Shane enjoys drawing and play survival horror video games.</p>
        </Container>
    )
}

export default ShaneAbout;