import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./navbar"
import Heros from "./heros";
import Cards from "./card";
import cardData from "./data.js"


const root = ReactDOM.createRoot(document.getElementById("root"));

const cardElements = cardData.map(cards =>{
    return <Cards key = {cards.id} cards = {cards} />
})


root.render(
   
        <div className="container">
            <NavBar />
            <Heros />
            <div className="card-container">
            {cardElements}
            </div>
        </div>
   
)