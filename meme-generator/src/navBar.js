import React from "react";
import icon from "./memeIcon.png"

export default function Nav(){
    return(
        <nav className="nav-bar">
            <img className="nav-icon" alt="meme icon" src={icon} />
            <span className="nav-logo-text"> Meme Generator</span>
            <span className="nav-text"> React Project</span>
        </nav>
    )
}