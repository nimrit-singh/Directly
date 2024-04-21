import React from 'react'
import '../../../assets/style/herosection.css'
import img1 from "../../../assets/images/SQZvKMlOTeCo10nACRwZZw.jpg"
import Divider from '../../parts/Divider'
const Herosection = () => {
  return (<div className="hero" id="hero">
    <div className='containerhero'>
      <span>
      <img className="heroimg" src={img1}></img>
    </span>
    <span className='herotext'>
      <h2 className="title">EMPOWER YOUR STORY</h2>
      <p className="text">
        Have a skill burning inside you? Turn
        your skills into captivating narratives. Discover your unique voice and claim your place in the world. It's time to Empower Your Story with us.
      </p>
    </span>
    </div>
    <div className='divider'> <Divider /></div>
  </div>
  )
}

export default Herosection