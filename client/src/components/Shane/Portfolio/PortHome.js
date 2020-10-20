import React from 'react';
import { Image } from "semantic-ui-react"

function PortHome() {
    return(
        <div className="portHome">
            <Image src={require("../../../images/Shane.png")} centered fluid className="shaneLogo"/>
        </div>
    )
}

export default PortHome;