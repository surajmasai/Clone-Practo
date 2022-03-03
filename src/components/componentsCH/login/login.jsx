import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        mobile: "",
        password: "",
    });

    // const [state, setState] = useState(<Register/>)


    const handleChange = e => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }


    const Change = () => {
        navigate("/OTP")
        generateOtp();
    }

    const generateOtp = () => {
        var digits = '0123456789';
        var otplength = 4;
        var otp = "";

        for (var i = 1; i < otplength; i++) {
            var index = Math.floor(Math.random() * (digits.length))
            otp = otp + digits[index];
        }
        alert(otp)
    }

    const login = () => {
        axios.post("http://localhost:2001/login", user)
            .then(res => {
                alert(res.data.message)
                if (res.data.message === "successfully") {
                    navigate("/")
                }
            })

    }

    return (

        <div className="normal">
            <div className="nill">
                <img src="https://accounts.practo.com/static/images/illustration.png" />
                <div className="login">
                    {/* {console.log("user", user)} */}
                    <p>Mobile Number</p>
                    <input type="text" name="mobile" value={user.mobile} placeholder="Enter your Mobile Number" onChange={handleChange} />
                    <p>Password</p>
                    <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handleChange} />
                    <div className="checking">
                        <input type="checkbox" className="checkbox1" /><label className="label">Remember me for 30 days</label>
                        <p onClick={Change}>forgot password ?</p>
                    </div>
                    <div className="checking">
                        <input type="checkbox" className="checkbox1" /><label className="label">Agree</label>
                    </div>
                    <div className="button" onClick={login}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Login