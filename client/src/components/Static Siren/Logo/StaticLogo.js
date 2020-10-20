import React from "react";
import "../Logo/style.css";

function StaticLogo() {
    return(
        <img src={require("../../../images/StaticSirenLogo.png")} alt="static-siren" className="ui fluid image staticLogo"/>
    )
}

export default StaticLogo;