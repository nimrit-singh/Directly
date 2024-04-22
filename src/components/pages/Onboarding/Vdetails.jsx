import React from "react";
import './style/vdetails.css'
import Signbutton from "../../parts/Signbutton";
const Vdetails = () =>  { return(<>

<h5>* indicates important</h5>
 <form>
      <label>*Aadhar number</label>
      <input type="number"/>
      
      <label>*Pan number</label>
      <input type="text"/>
      <input type="checkbox"/>
      <h6>if pan not available</h6>
      <select>
      <option>1</option>
      <option>2</option>
</select>
      <input type="file"></input>
</form>

<div className="bsection">
<div className="pbtnb">
<Signbutton name="Back"/></div>
<div className="pbtn">
<Signbutton name="Next"/></div></div>
</>)
}

export default Vdetails