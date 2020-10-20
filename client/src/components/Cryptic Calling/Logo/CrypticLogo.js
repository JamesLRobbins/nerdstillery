import React from "react";
import "../Logo/style.css";

function CrypticLogo() {
    return(
        <img src={require("../../../images/crypticCallingLogo.png")} alt="nerdstillery" className="ui fluid image crypticLogo"/>
    )
}

export default CrypticLogo;