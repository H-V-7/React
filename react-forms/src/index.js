import React from "react";
import ReactDOM from "react-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

function Form() {
  const [formData, setFormData] = React.useState({firstName:"", lastName:"", email:"", comment:""}); 

  console.log(formData)

  function handleChange(event) {
    //here we used event object 
    //which is passed down to a event function by the browser itself
    //and we used the target property from that event to know the target/dom element
    //which is being updated whenever we type anything in that input box and
    //we used onChange eventhandler and we are updating state with every
    //keystroke 
    setFormData(prevFormData => {
      console.log(prevFormData)
      return {
        ...prevFormData,
        [event.target.name]:event.target.value //computed property and here name attribute is used for
        //naming the property in object and they both should be smae
      }
    })
  }


  return(
    <form>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
        <input type="text" name="lastName"  placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
        <input type="email" name="email"  placeholder="Email Id" onChange={handleChange} value={formData.email} />
        <textArea name="comment" placeholder="commnet" onChange={handleChange} value={formData.comment} />
    </form>
  )
}

root.render(<Form />)


