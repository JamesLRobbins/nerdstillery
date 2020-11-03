import React from 'react';
import { Image } from "semantic-ui-react"

function PortHome() {
    return(
        <div className="portHome">
            <Image src={require("../../../images/shaneHomepageTest.jpg")} centered fluid size="huge "/>
        </div>
    )
}

export default PortHome;