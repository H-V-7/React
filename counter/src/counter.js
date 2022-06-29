import React from "react"


export default function Counter(){

    const [counter,setCounter] = React.useState(0);

   
    //we used the event as event handler function parameter as we wanted 
    //the event list and to indetify which event is getting fired when the
    //button was clicked and we used class name to verify the same
    function handler(event){
        if(event.target.className === "btn-increase"){
            setCounter(prevCount => prevCount+1)
        }
        else{
            setCounter(prevCount => prevCount-1)
        }
    }

    return(
        <div>
            <button onClick = {handler} className = "btn-decrease">-</button>
            <h1>{counter}</h1>
            <button onClick={handler} className = "btn-increase">+</button>
        </div>
    )
}