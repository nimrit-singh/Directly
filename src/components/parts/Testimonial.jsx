import React from "react";

import '../../assets/style/testimonial.css';
// import {slideInRight,slideInLeft} from  'react-animations';
// import styled, {keyframes} from 'styled-components';
// slidein=merge(slideInRight,slideInLeft);

 
// const slideanimation= keyframes`${slidein}`;
// const Slide=styled.div`
// animation: 3s ${slideanimation};
// infinite`;
// import Ticker from "react-ticker";
const Testimonial= (prop)=>{
  
    return(
// {/* <Slide> */}

        <div className="tcard">
            <div className="profile"><img src={prop.profile} className="ppic"/></div>
             <div className="body">{prop.username}</div>
            <p className="feedback">"{prop.feedback}"</p>
            
        </div>
        
    // </Slide>


    );
  }
  export default Testimonial;