import React from "react";
import Signbutton from "../../parts/Signbutton";
const Sdetails = () =>  { return(<> 
<div className="slist"></div>

<h5>* indicates important</h5>
<form>
      
      <label>*Tell us what you can do?:
      <input type="text"/></label>
      
    
</form>
<div className="bsection">
<div className="pbtnb">
<Signbutton name="Back"/></div>
<div className="pbtn">
<Signbutton name="Next"/></div></div>
</>)
}

export default Sdetails