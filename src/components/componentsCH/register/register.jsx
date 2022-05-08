import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../Auth/Auth";

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        mobile: "",
        password: "",
        reEnterPassword: ""
    });


    const handleChange = e => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    // const Change = () => {
    //     navigate("/login")
    // }

    const register = () => {
        const { name, mobile, password } = user;


        const generateOtp = () => {
            var digits = '0123456789';
            var otplength = 4;
            var otp = "";

            for (var i = 1; i < otplength; i++) {
                var index = Math.floor(Math.random() * (digits.length))
                otp = otp + digits[index];
            }
            return otp
        }

        if (name && mobile && password && password.length >= 6 && password.length <= 10) {
            axios.post("http://localhost:2001/register", user)
                .then(res => {
                    alert(res.data.message);
                    alert(generateOtp())
                    navigate("/Auth")
                })
        }
        else {
            alert("Invalid input")
        }


    }

    return (
        <div>
            <div className="total">
                <img src="https://accounts.practo.com/static/images/illustration.png" />
                <div className="register">

                    <div className="Heading">
                        <h4>
                            join Practo
                        </h4>
                        <p>Are you a doctor? <Link to="#" className="smalla">Register Here</Link></p>
                    </div>
                    <br />
                    <hr></hr>
                    <br />
                    <p>Full name</p>
                    <input type="text" name="name" value={user.name} placeholder="Full Name" onChange={handleChange} />
                    <p>Mobile Number</p>
                    <input type="text" name="mobile" value={user.mobile} placeholder="Mobile Number" onChange={handleChange} />
                    <p>Create Password</p>
                    <input type="password" name="password" value={user.password} placeholder="Create password" onChange={handleChange} />
                    <div className="strength"></div>
                    <div className="check">
                        <input className="checkbox" type="checkbox" /><label>Receive relevant offers and promotional communication from practo</label>
                    </div>
                    <p className="smallp">By signng up, I agree to <Link to="#" className="smalla">terms</Link></p>
                    <div className="button" onClick={register}>Register</div>
                </div>
            </div>
        </div>
    )
}

export default Register