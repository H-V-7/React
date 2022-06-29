import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css"
import Nav from "./navBar";
import Meme from "./Meme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="container">
            <Nav />
            <Meme />
        </div>
    </React.StrictMode>
)
        