import React from "react";
import { Image } from 'semantic-ui-react';

function CrypticLogo() {
    return(
        <Image src={require("../../../images/crypticCallingLogo.png")} alt="Cryptic Calling" size="massive" centered className="crypticLogo"/>
    )
}

export default CrypticLogo;