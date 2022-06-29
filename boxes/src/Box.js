import React from "react";

export default function Box(props) {

    const style = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }
    return(
        <div style={style} className="box" onClick={()=>props.handleClick(props.id)}></div>
    )

}
