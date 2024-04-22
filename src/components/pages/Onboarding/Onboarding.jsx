import React from 'react';
import Foot from '../Home/Foot';
import Card from '../../parts/Card';
import "./style/onboarding.css";
import Header from '../../parts/Header';
import Pdetails from './Pdetails';
import Sdetails from './Sdetails';
import Vdetails from './Vdetails';
import Success from './Success';
const Onboarding = () => {
  return (<>
  <div className='registration'>
    <Header/>
    <div className='rgstrcrd'>
      <Card className="crd">
        <div className=' tab'>
         <div className='tbc'></div>
         <div className='tb'></div>
         <div className='tbc'></div>
         <div className='tb'></div>
         <div className='tbc'></div>
         </div>
      <div className='crdcontent'>
      {/* <Pdetails/>  */}
      {/* <Sdetails/> */}
      <Vdetails/>   
      {/* <Success/> */}
      </div>
      </Card>
    </div>
  </div>
  <Foot/>
  </>)
}

export default Onboarding