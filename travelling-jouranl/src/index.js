import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./NavBar";
import Card from "./Cards"
import "./index.css"
import data from "./data"

const root = ReactDOM.createRoot(document.getElementById("root"));


const cardElements = data.map(items=>{
    return <Card key = {items.id} {...items} />
})

root.render(
   
        <div className="main-container">
            <Nav />
            <section className="card-elements">
                {cardElements}
            </section>
        </div>
  
)
