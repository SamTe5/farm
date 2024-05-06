import React from 'react'
import "./style.css";

function Carouselim({sliderImgs}) {
  return (
    <div className='carouselBox'>
        
        <img src={sliderImgs} alt='sliderResim' className='carouselBox'/>
            
    </div>
  )
}

export default Carouselim