import React from 'react'
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
export default function Home() {
  return (
    <Fragment>

      <section className="home" id="home">
        <div className="content">
          <h3>its time to celebrate! the best <span> event organizers </span></h3>
          <Link to="./SignIn" id="btn">Book Now</Link>
        </div>


        <div className="swiper-container home-slider ">
          <div className="swiper-wrapper ms-5">
            <div className="swiper-slide me-5"><img src="assets/images/slidepic1.jpg" alt="" /></div>
            <div className="swiper-slide  me-4"><img src="assets/images/slidepic3.jpg" alt=""/></div>
            <div className="swiper-slide ms-2"><img src="assets/images/slidepic2.jpg" alt="" /></div>
            {/* <div className="swiper-slide"><img src="assets/images/slidepic4.jpg" alt="" /></div>
            <div className="swiper-slide"><img src="assets/images/slidepic1.jpg" alt="" /></div>
            <div className="swiper-slide"><img src="assets/images/slidepic4.jpg" alt="" /></div> */}
          </div>
        </div>

      </section>
    </Fragment>
  )
}