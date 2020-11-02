import React from 'react';
import { Image } from "semantic-ui-react"

function ShaneLogo() {
    return(
        <div>
            <Image src={require("../../../images/shaneHomepageTest.jpg")} centered fluid className="shaneLogo" size="massive"/>
        </div>
    )
}

export default ShaneLogo;