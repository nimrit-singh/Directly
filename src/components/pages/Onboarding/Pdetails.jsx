import React from "react"
import "./style/pdetails.css"
import Signbutton from "../../parts/Signbutton"
const Pdetails = () =>  { return(<>
<div className="pdetails">
<h6>* indicates important</h6>
 <form id="Pdetails">
      <label>Full Name*</label><br/>
      <input className="fullname" type="text"/><div className="adinfo">
      <span><label>*Date of Birth:</label><br/>
      <input className="dob" type="date"/></span>
      
      <span className="ag">
      <label>Age*</label><br/>
      <input className="age" type="number"/></span></div>
</form>
<label>Gender</label>
<select className="gender" form="pdetails">
      <option>Male</option>
      <option>Female</option>
      <option>Others</option>
</select>
</div>

<div className="pbtn">
<Signbutton name="Next"/></div>
</>)
}

export default Pdetails