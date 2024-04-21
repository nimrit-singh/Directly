import React from "react";
import Signbutton from "../../parts/Signbutton";
const Vdetails = () =>  { return(<>

<h5>* indicates important</h5>
 <form>
      <label>*Full Name:
      <input type="text"/></label>
      
      <label>*Date of Birth:
      <input type="text"/></label>
      
      <label>*Age:
      <input type="number"/></label>
       
      <label>*Gender:
      <input type="text"/></label>
</form>
<div className="bsection">
<div className="pbtnb">
<Signbutton name="Back"/></div>
<div className="pbtn">
<Signbutton name="Next"/></div></div>
</>)
}

export default Vdetails