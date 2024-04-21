import React from 'react';
import Card from '../../parts/Card'
import Signbutton from '../../parts/Signbutton';
import '../../../assets/style/Onboarding.css';
const Cta = () => {
    return (
        <div className="register" id="register">
        <div  className='onboard'>
            <Card><div className='ctatext'>
                <h3>START YOUR EARNING JOURNEY WITH US</h3></div>
               <div className="si"> <Signbutton className="si" name="Register" /></div>
            </Card>
            </div>
        </div>)
}

export default Cta