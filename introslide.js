

import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./style.css"

function App() {

  const handleSubmit = (event) => {
    event.preventDefault(); 
  }
const renderForm = (
    <div className = "form">
		<div className= "input-container">
		<label>Name </label>
		<input type="text" name="name" required />
		
		<div className = "input-container">
			<label>Email </label>
			<input type="text" name="email" required/>
		</div>
		</div>
		<div className= "input-container">
				<label>Date </label>
			<input type ="text" name="date" required/>
		<div className = "input-container">
			<label>Type of Query </label>
			<input type ="text" name="typeofquery" required/>

			<div className = "input-container">
				<label>Public or Private Query? </label>
				<input type ="text" name="publicorprivate" required/>

		<div className="button-container">
			<input type = "submit"/>
		</div>	
		</div>
    </div>
    </div>

		

		</div>
		

		

);

return(
  //line 50 is a placeholder idk how to cue the login slide
	<div className="app">
		<div className="info-slide">
			<div className="title">Login</div>
      {isSubmitted? <div> Cue the login page... </div>: renderForm}
     </div>
     </div> 
);
		}
  
    export default App;
