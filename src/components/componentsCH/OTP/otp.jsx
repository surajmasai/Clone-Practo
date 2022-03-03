import React, {useState} from "react";
import "./otp.css";
import Login from "../login/login";
import { useNavigate } from "react-router-dom";
import Register from "../register/register";
import Auth from "../Auth/Auth";

const OTP = () =>{

    const navigate = useNavigate()

    const [state, setState] = useState(<Auth />)

    const updateContent = () => {
        
        setState(
            <Login />
        )
    }

    const updateAnother = () => {
        setState(
            <Register />
        )
    }

    const Change = () =>{
        navigate("/Auth");
    }

    const generateOtp = () => {
        var digits = '0123456789';
        var otplength = 4;
        var otp = "";
        
        for(var i = 1; i<otplength; i++){
            var index = Math.floor(Math.random()* (digits.length))
            otp = otp + digits[index];
        }
        alert(otp)
    }


    return (

        <div className="otp">

        <div className="high">
            <div className="first">
                <button  onClick={updateContent}>Login</button>
            </div>
            <div className="second">
                <button onClick={updateAnother}>Regsiter</button>
            </div>
        </div>
        <hr className="line"></hr>
        <div className="bod">
             <div className="img">
                <img src="https://accounts.practo.com/static/images/illustration.png" />
             </div>
             <div id="mai">
                <p className="heading">Verify Mobile</p>
                <hr></hr>
                <br />
                <p className="mes">We have sent you an OTP on</p>
                <p className="alert">Alert Message</p>
                <br />
                <p className="otp">OTP</p>
                <div className="flex">
                    <input type="number" placeholder="Please enter the 3 digit OTP here to verify" className="input"/>
                    <p className="pin" onClick={generateOtp}>Resend OTP</p>
                </div>
                <button className="but" onClick={Change}>Login</button>
             </div>
        </div>
    </div>
    )
}

export default OTP;