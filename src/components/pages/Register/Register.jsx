import React from 'react';
import Foot from '../Home/Foot';
import Card from '../../parts/Card';
import Verification from './Verification';
import Signbutton from '../../parts/Signbutton';
// import '../../../assets/style/register.css';
import Header from '../../parts/Header';

import '../../../assets/style/rspage.css';
const Register = () => {
  return (<>
  <div className='registration'>
  <Header>
      <div>
        <h1>Directly</h1>
      </div>
    </Header>
    <div className='rgstrcrd'>
      <Card className="crd">
        <div className='tab'><div className='reg t2'>Register</div>
         <div className='sig t2'>Sign in</div></div>
      <div className='crdcontent'>
        <form>
          <label>Phone:
          <input className='phn' type="number"/></label>
          <br/>
<label> <input className='check' type="checkbox"/> I have read & agree with Directly’s privacy policies, 
terms and conditions
         </label>     
</form>

<div class="next">
<Signbutton name="Next"/> </div>  
{/* <Verification/> */}
</div>
      </Card>
    </div>
  </div>
  <Foot/>
  </>)
}

export default Register