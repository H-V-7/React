import React from "react";
import WindowTracker from "./WindowTracker";

export default function App(props){
    const [show,setShow] = React.useState(true);
    function eventHandler(){
        console.log(window)
        setShow(prevShow => !prevShow);
      }
    return(
    <div className="container">
        <button onClick={eventHandler}>
            Toggle WindowTracker
        </button>
        {show && <WindowTracker /> }
    </div>
)}