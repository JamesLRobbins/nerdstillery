import React from 'react';
import { Image } from 'semantic-ui-react'

function Logo(props) {
    return(
        <div>
            <Image centered fluid size="huge">{props.home}</Image>
        </div>
    )
}

export default Logo