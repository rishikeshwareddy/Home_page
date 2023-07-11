import React from 'react'
import "./slider.css"
import { useInView } from 'react-intersection-observer';
const Slider = ({imagesrc,title,subtitle,flipped}) => {

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.4,
      });

  const renderContent=()=>{
    if(!flipped){
        return(
            <>
                <img src={imagesrc} alt="travel" className='slider_image'/>
                <div className='slider_content'>
                    <h1 className='slider_title'>{title}</h1>
                    <p className='slider_subtitle'>{subtitle}</p>
                </div>
            </>
        );
    }else{
        return (
            <>
            <div className='slider_content'>
                <h1 className='slider_title'>{title}</h1>
                <p className='slider_subtitle'>{subtitle}</p>
            </div>
            <img src={imagesrc} alt="travel" className='slider_image'/>
        </>
        )
    }
  }
  return (
    <div className={inView ? "slider slider_zoom":"slider"} ref={ref}>
      {renderContent()}
    </div>
  )
}

export default Slider
