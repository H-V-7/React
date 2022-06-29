import React from "react";
import boxes from "./boxData";
import Box from "./Box";
export default function App(){
    const [box,setBox] = React.useState(boxes);

   

    function toggle(id){
        setBox(prevBox =>{
            return prevBox.map(square =>{
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
        

    const squareElements = box.map(square =>(<Box key={square.id} id ={square.id} on = {square.on} handleClick = {toggle} />))
    
    return(
        <main>
        {squareElements}
        </main>
    )
}
