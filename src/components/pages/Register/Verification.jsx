import React from "react";
import Signbutton from "../../parts/Signbutton";
import "../../../assets/style/verifywotp.css"
const Verification=()=>{
return(<>
<form><label>Otp Verification:
    <div className="otp"><input className="number" type="number"/>
    
    <input className="number" type="number"/>
    
    <input className="number" type="number"/>
    
    <input className="number" type="number"/>
    
    <input className="number" type="number"/>
    
    <input className="number" type="number"/>
    </div>
</label>
</form>
<div className="actbtn">
    <Signbutton name="Submit"/>
</div>
</>)
}
export default Verification