import React from 'react';
import { Image } from 'semantic-ui-react';

function ShaneTitle() {
    return(
        <div>
            <Image src={require("../../../images/ShaneTitle.png")} centered fluid size="massive" className="shaneTitle"/>
        </div>
    )
}

export default ShaneTitle;