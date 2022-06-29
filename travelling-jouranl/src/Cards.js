import React from "react";

import location from "./location.png"

export default function Card(props){
    return(
        <div className="card-container">
            <img src= {`../images/${props.image}`} className="card-image" alt={props.alt}/>
            <div className="card-info">
            <img src = {location} className="card-icon" /> <span>{props.location}</span>
            <a href= {props.googleMap} className="location-link">View on google map</a>
            <h2 className="location-heading">{props.location}</h2>
            <p className="card-discription">{props.discription}</p>
            </div>
        </div>
    )
}