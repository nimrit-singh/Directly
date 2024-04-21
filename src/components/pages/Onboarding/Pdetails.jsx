import React from "react"
import Signbutton from "../../parts/Signbutton"
const Pdetails = () =>  { return(<>

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
<div className="pbtn">
<Signbutton name="Next"/></div>
</>)
}

export default Pdetails