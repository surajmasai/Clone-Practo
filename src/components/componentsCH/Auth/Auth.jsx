 import React,  { useState } from "react";
import Register from "../register/register";
import Login from "../login/login";
 import "./Auth.css";

 const Auth = () => {

     const [state, setState] = useState(<Login />);


     const updateContent = () => {
        let parent = document.getElementsByClassName("first");
      setState(
        <Login />
      )

      function changeColor(blue){
          parent.body.style.color = blue;
      }
      changeColor()

      
    }

     const updateAnother = () => {
        
        setState(
            <Register />
        )
        
    }
    

    return (
        <div className="auth">

            <div className="high">
                <div className="first">
                    <button  onClick={updateContent}>Login</button>
                </div>
                <div className="second">
                    <button onClick={updateAnother}>Regsiter</button>
                </div>
            </div>
            <hr className="line"></hr>
            <div className="body">
                 
                 <div id="main">
                    {state}
                 </div>
            </div>
        </div>
    )
 }

 export default Auth