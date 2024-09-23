import React from 'react'; 
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

export default function Home() {
  return (
    <Fragment>
      {/* Home Section */}
      <section className="home py-5" id="home" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="container py-5">

          {/* Content Section */}
          <div className="row align-items-center mb-5 py-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-4 mb-4 fw-bold">
                It's time to celebrate! The best <span className="text-warning">Event Organizers</span>
              </h1>
              <Link to="./SignIn" className="btn btn-warning btn-lg">
                Book Now
              </Link>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0 text-center py-5">
              <img
                src="assets/New folder/Venue/venue_13.jpg"
                alt="Event Organizer"
                className="img-fluid rounded shadow-sm py-5"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Image Slider 1*/}
          <div className="row g-4">
            {/* First Image */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white shadow-sm">
                <img
                  src="assets/images/homeImg/homeImg6.jpg"
                  alt="Slide 1"
                  className="card-img-top rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Second Image */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white shadow-sm">
                <img
                  src="assets/images/homeImg/homeImg2.jpg"
                  alt="Slide 2"
                  className="card-img-top rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Third Image */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white shadow-sm">
                <img
                  src="assets/images/homeImg/homeImg3.jpeg"
                  alt="Slide 3"
                  className="card-img-top rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Fourth Image */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white shadow-sm">
                <img
                  src="assets/images/homeImg/homeImg4.jpg"
                  alt="Slide 4"
                  className="card-img-top rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Image Slider 2*/}
          <div className="row g-4">
            {/* First Image */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white shadow-sm">
                <img
                  src="assets/images/homeImg/homeImg4.jpg"
                  alt="Slide 1"
                  className="card-img-top rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Second Image */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white shadow-sm">
                <img
                  src="assets/images/homeImg/homeImg3.jpeg"
                  alt="Slide 2"
                  className="card-img-top rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Third Image */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white shadow-sm">
                <img
                  src="assets/images/homeImg/homeImg2.jpg"
                  alt="Slide 3"
                  className="card-img-top rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Fourth Image */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white shadow-sm">
                <img
                  src="assets/images/homeImg/homeImg6.jpg"
                  alt="Slide 4"
                  className="card-img-top rounded"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}







// import React from 'react'
// import { Link } from 'react-router-dom';
// import { Fragment } from 'react'
// export default function Home() {
//   return (
//     <Fragment>

//       <section className="home" id="home">
//         <div className="content">
//           <h3>its time to celebrate! the best <span> event organizers </span></h3>
//           <Link to="./SignIn" id="btn">Book Now</Link>
//         </div>


//         <div className="swiper-container home-slider ">
//           <div className="swiper-wrapper ms-5">
//             <div className="swiper-slide me-5"><img src="assets/images/slidepic1.jpg" alt="" /></div>
//             <div className="swiper-slide  me-4"><img src="assets/images/slidepic3.jpg" alt=""/></div>
//             <div className="swiper-slide ms-2"><img src="assets/images/slidepic2.jpg" alt="" /></div>
//             {/* <div className="swiper-slide"><img src="assets/images/slidepic4.jpg" alt="" /></div>
//             <div className="swiper-slide"><img src="assets/images/slidepic1.jpg" alt="" /></div>
//             <div className="swiper-slide"><img src="assets/images/slidepic4.jpg" alt="" /></div> */}
//           </div>
//         </div>

//       </section>
//     </Fragment>
//   )
// }