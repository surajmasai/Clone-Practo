import React from "react";
import "./homepage.css";

const Homepage = ({setLoginUser}) => {

    const Change = () => {
        setLoginUser({});
    }

    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button"onClick={Change}>Logout</div>
        </div>
    )
}


export default Homepage
