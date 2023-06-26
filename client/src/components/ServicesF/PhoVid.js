// import React, { Fragment } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
export default function PhoVid() {
  return (
    <Fragment>
{/* start */}
            
<div>mt-5</div>
            <div>mt-5</div>
            <div>mt-5</div>   {/*for margin top full page */}
            <div>mt-5</div>
            <div>mt-5</div>
            <div>mt-5</div>

            {/* end  */}


          <section className="gallery" id="gallery">

<h1 className="heading">photos & <span> videos</span></h1>

<div className="box-container">



<div className="box h-100">
    <img src="assets/New folder/photos/shoot_1.png" alt="" />
    <h3 className="title">Kajal Photography</h3>
    <div className="icons">
        <Link to="/PhoVidForm" className="fas fa-">Book Now</Link>
        <p>Start from @Rs.11999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/photos/shoot_2.jpg" alt="" />
    <h3 className="title">Payal Studio</h3>
    <div className="icons">
        <Link to="/PhoVidForm" className="fas fa-">Book Now</Link>
        <p>Start from @ Rs.13999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/photos/shoot_3.webp" alt="" />
    <h3 className="title">Wedding Photography</h3>
    <div className="icons">
        <Link to="/PhoVidForm" className="fas fa-">Book Now</Link>
        <p>Start from @ Rs.7999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/photos/shoot_10.jpeg" alt="" />
    <h3 className="title">Prism Photography</h3>
    <div className="icons">
        <Link to="/PhoVidForm" className="fas fa-">Book Now</Link>
        <p>Start from @ Rs.7999/-</p>
    </div>
</div>
   


<div className="box h-100">
    <img src="assets/New folder/photos/shoot_5.jpg" alt="" />
    <h3 className="title">Pictography Studio</h3>
    <div className="icons">
        <Link to="/PhoVidForm" className="fas fa-">Book Now</Link>
        <p>Start from @ Rs.12449</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/photos/shoot_9.jpeg" alt="" />
    <h3 className="title">Ankit Studio</h3>
    <div className="icons">
        <Link to="/PhoVidForm" className="fas fa-">Book Now</Link>
        <p>Start from @ Rs. 11000</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/photos/shoot_8.webp" alt="" />
    <h3 className="title">Sameer Photography</h3>
    <div className="icons">
        <Link to="/PhoVidForm" className="fas fa-">Book Now</Link>
        <p>Start from @ Rs.19999</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/photos/shoot_7.jpg" alt="" />
    <h3 className="title">WedpiX Studio</h3>
    <div className="icons">
        <Link to="/PhoVidForm" className="fas fa-">Book Now</Link>
        <p>Start from @ Rs. 25000</p>
    </div>
</div>



</div>

</section>
    </Fragment>
  )
}
