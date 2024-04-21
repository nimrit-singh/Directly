import React from 'react';
import Foot from '../Home/Foot';
import Card from '../../parts/Card';
import Signbutton from '../../parts/Signbutton';
// import '../../../assets/style/register.css';
import Header from '../../parts/Header';
import Verification from './Verification';
import '../../../assets/style/rspage.css';
const Signin = () => {
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
        <form><div></div>
          <label>Phone:
          <input type="number" className='phn'/></label>     
</form>

<div className="next">
<Signbutton name="Next"/> 
</div>
{/* <Verification/> */}
  </div>
      </Card>
    </div>
  </div>
  <Foot/>
  </>)
}

export default Signin