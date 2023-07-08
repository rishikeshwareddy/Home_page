import React from 'react';
import './Hero.css';
const Hero = ({imagesrc}) => {
  return (
    <div className='hero'>
      <img src={imagesrc} alt="travel made easy" className='hero_image'/>
      <h1 className='hero_title'>Simplify Your Journey, Empower Your Adventure</h1>

    </div>
  )
}

export default Hero;
