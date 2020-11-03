import React from "react";
import { Image } from "semantic-ui-react"

function StaticLogo() {
    return(
        <Image src={require("../../../images/StaticSirenLogo.png")} alt="static-siren" className="staticLogo" size="massive" centered />
    )
}

export default StaticLogo;