import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  // we 1st created react state to store the incoming value from the API and
  //and we will use React.useEffect hook to handle the abnormal behavior of the
  //elements which are not related to React naturally :)
  //and we use it to stop the compoents or the fetch function in this case
  //to run infinitely as we are using state and each time state changes 
  //the components re-render and the updates state again and this cause a infintie loop 
  //therefore we use .useEffect hook to tackel this problem and with this hook function
  //we have two paramenters one is the callback function which is used to call the processes
  //and method which are not native to react and the second argument is a dpendencies function which controls 
  //when the useEffect hook will run and the array may contain some varibale or a value 
  //and if that changes then useEffect function will re-render again.

  //state to manage incoming data from the api
  
  const [starWarsData,setStarWarData] = React.useState({}); //we initiated this state with an empty object
  //which will be replacec by the api call and it updates when the vale
  //of count change.
  console.log(starWarsData);
  const [count,setCount] = React.useState(1); //this state maintains the count value

  //using React.useEffect hook and using the count variable to get more characters

  React.useEffect(()=>{
    console.log("New Charater Generated")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res =>res.json())
      .then(data => setStarWarData(data));
},[count])

function handleClick() {
  setCount(prevCount=>prevCount+1);
}

return(
 //we cant display object as a chlid element in react
 //so we converted it to a string
  <div>
    <h1>The count is {count}</h1>
    <button onClick={handleClick}>Generate New Character</button>
    <pre>
      {JSON.stringify(starWarsData,null,2)}
    </pre>
    
  </div>
)
}

root.render(<App />)