import React from "react"

import star from "./star.png"

export default function Cards(props){
    console.log(props)
    let badgeText;
    if(props.cards.openSpots === 0){
     badgeText = "SOLD OUT"
    }
    else if(props.cards.location === "Online"){
     badgeText = "Online"
    }
   
     return(
        
       <div className="card-section">
             {badgeText && <div className="card-badge">{badgeText}</div>}
           <img src = {`../images/${props.cards.image}`} className="card-img" alt="cover image" />
             <div className="card-info">
                 <span>
                   <img src={star} alt= "star icon" className="rating-star"/> {props.cards.stats.rating}<span className="grey"> ({props.cards.stats.reviewCount}) . {props.cards.country}</span>
                 </span>
                 <p>{props.cards.title}</p>
                 <p><b>From ${props.cards.price}</b><span className="grey"> / person</span> </p>
             </div>
        </div>
      
    )
}