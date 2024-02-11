import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from "react-countup"

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* Left side start from here */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>Discover <br /> Most Suitable <br /> Property</h1>
          </div>

          <div className="hero-desc flexColStart">
            <span  className="secondaryText">Find a variety of properties that suit you very easily</span>
            <span  className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className=" flexCenter hero-serch-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Serch</button>
          </div>

          {/* Stats-section strat from here */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText" >Happy Customer</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>

        </div>

        {/* Right side of the hero section */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero