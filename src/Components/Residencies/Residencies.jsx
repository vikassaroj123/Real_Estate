import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import './Residencies.css'
import 'swiper/css'
import data from '../../utils/slider.json'

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Recidencies</span>
            </div>
            <Swiper>
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                          <div className="r-card flexColStart">
                            <img src={card.image} alt="" />
                             <span className="secondaryText r-price">
                                <span style={{color:'orange'}}>$</span>
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

export default Residencies