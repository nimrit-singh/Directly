import React from 'react'
import Searchbar from '../../parts/Search'
import '../../../assets/style/home.css'
import Herosection from './Herosection';
import Testimonial from './Testimonials';
import imgg from "../../../assets/images/icon.png";
import Foot from './Foot';
import Signbutton from '../../parts/Signbutton';

import Navbar from '../../parts/Navbar';
import '../../../assets/style/App.css';
 import {navigateRegister} from'../../parts/Navigation'
import Cta from './Cta';
 
const Home = () => {
  return (
    <>
    
    <div className="homepage" id="home">
      <Navbar />
      <div className="home">

        <div className="heading">
          <div>
            <img className="logo" src={imgg} alt="Directly" />
          </div>
          <div className="cta" >
            <Signbutton  name="Register"/>
          </div>
        </div>
        <div className='content'>
          <h1>Directly</h1>
          <h3>Transforming Job Search</h3>
          <Searchbar />
        </div>
      </div>
      <Herosection />
      <Testimonial/>
      <Cta/>
      <Foot />
      </div>
    </>
  )
}

export default Home