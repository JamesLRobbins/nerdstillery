import React from 'react';
import { Image } from 'semantic-ui-react'

function Logo(props) {
    return(
        <div>
            <Image centered size="massive">{props.home}</Image>
        </div>
    )
}

export default Logo