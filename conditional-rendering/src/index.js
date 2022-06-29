import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


const root  = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  
  const [msg , setMsg] = React.useState(["A","B"]);
  console.log(msg)

  
  
  return(
    <div>
      {msg.length === 0 ? <h1>All Caught up</h1> : <h1> You have {msg.length} unread {msg.length === 1 ? "message" : "messages"}</h1>}
      <button>Delete Msg</button>
    </div>
  )
}

root.render(<App />)