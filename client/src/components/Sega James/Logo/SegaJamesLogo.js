import React from "react";
import { Image } from 'semantic-ui-react';

function SegaJamesLogo() {
    return(
        <Image src={require("../../../images/segaJamesLogo.png")} alt="segaJames" className="segaLogo" size="huge" centered/>
    )
}

export default SegaJamesLogo;