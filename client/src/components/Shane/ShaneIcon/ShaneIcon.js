import React from 'react';
import { Image } from 'semantic-ui-react'
function ShaneIcon() {
    return(
        <div>
            <Image centered fluid size="tiny"> <img src={require("../../../images/shaneIconInterted.png")} alt="shaneIcon" className="ui fluid image shaneIcon"/></Image>
        </div>
    )
}

export default ShaneIcon;