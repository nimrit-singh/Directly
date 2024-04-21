import React, { Component } from 'react'
import '../../../assets/style/testmain.css'
import Testimonial from '../../parts/Testimonial';
import Partner from '../../parts/Partner'
import zomato from '../../../assets/svg/zomatoicon.svg';
const Testimonials = () => {
  return (
    <>
      <div className='tsection' id="test">
        <h3 className='ttitle'>OUR COMMUNITY SPEAKS</h3>
        <div className="testimonialwrap">
          <div className='testimonial'>
            <Testimonial username="Rajiv" profile={zomato} feedback="Rajiv feedback" />
            <Testimonial username="Rajiv" profile={zomato} feedback="Rajiv feedback" />
            <Testimonial username="Rajiv" profile={zomato} feedback="Rajiv feedback" />
            <Testimonial username="Rajiv" profile={zomato} feedback="Rajiv feedback" />
            <Testimonial username="Rajiv" profile={zomato} feedback="Rajiv feedback" />
          </div>
        </div>
        <div className='partner-container'>
          <h4 className='pText'>
            Empowering Our Partners
          </h4>
          <div className='pinfo'>
            <Partner   icon={zomato} />
            <Partner   icon={zomato} />
            <Partner   icon={zomato} />
            <Partner   icon={zomato} />
            <Partner   icon={zomato} />
            <Partner   icon={zomato} />
            <Partner  icon={zomato} />
            {/* <Partner   icon={zomato} /> */}
            {/* <Partner   icon={zomato} /> */}
            {/* <Partner   icon={zomato} /> */}
          </div>
        </div>
      </div>
    </>

  )
}
export default Testimonials; 