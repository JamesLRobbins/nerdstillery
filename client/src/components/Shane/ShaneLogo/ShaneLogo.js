import React from 'react';
import { Image } from "semantic-ui-react"

function ShaneLogo() {
    return(
        <div>
            <Image src={require("../../../images/shaneHomepageTest.jpg")} centered fluid className="shaneLogo"/>
        </div>
    )
}

export default ShaneLogo;