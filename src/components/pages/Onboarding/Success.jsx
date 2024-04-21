import React from "react";
import "./style/success.css";
import done from "../../../assets/images/Group 49.png";
import Signbutton from "../../parts/Signbutton";
const Success = () => {
    return(
        <>
        
        <div className="success icon">
            <img src={done} className="suic"></img>
        </div>
        <h3>Congratulations</h3>
        <h2>Welcome to Directly family</h2>
        <div className="pbtn">
        <Signbutton name="Next"/></div>
       <h5>Directing to dashboard in t secs</h5>
        </>
    )
}
export default Success