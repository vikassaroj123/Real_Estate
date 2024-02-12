import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './Residencies.css'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Recidencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton/>
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card flexColStart">
                  <img src={card.image} alt="" />
                  <span className="secondaryText r-price">
                    <span style={{ color: 'orange' }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

// Slider button created here
const SliderButton = () =>{
  const swiper = useSwiper();
  return (
    <div className="r-button" id="b">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}
export default Residencies