import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

export default function EnterTainment() {
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

<h1 className="heading">our <span>entertainment</span></h1>

<div className="box-container">


<div className="box h-100">
    <img src="assets/New folder/EnterTainment/Dj_1.jpg" alt="" />
    <h3 className="title">Rahul Sound And DJ</h3>
    <div className="icons">
        <Link to="/EtainmentForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.45999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/EnterTainment/Dj_2.jpg" alt="" />
    <h3 className="title">Adheera Light </h3>
    <div className="icons">
        <Link to="/EtainmentForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.5999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/EnterTainment/Dj_3.jpg" alt="" />
    <h3 className="title">Arru Sound System</h3>
    <div className="icons">
        <Link to="/EtainmentForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.7999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/EnterTainment/Dj_5.jpeg" alt="" />
    <h3 className="title">Sumat DJ & Floor</h3>
    <div className="icons">
        <Link to="/EtainmentForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.35999/-</p>
    </div>
</div>
   


<div className="box h-100">
    <img src="assets/New folder/EnterTainment/EnterTainment_1.jpg" alt="" />
    <h3 className="title">Sound system For Sangeet</h3>
    <div className="icons">
        <Link to="/EtainmentForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.12999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/EnterTainment/EnterTainment_2.jpg" alt="" />
    <h3 className="title">Sound system For Function</h3>
    <div className="icons">
        <Link to="/EtainmentForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.19999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/EnterTainment/EnterTainment_3.jpg" alt="" />
    <h3 className="title">Sound system For Haldi</h3>
    <div className="icons">
        <Link to="/EtainmentForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.15999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/EnterTainment/EnterTainment_4.jpg" alt="" />
    <h3 className="title">Ramesh Dj</h3>
    <div className="icons">
        <Link to="/EtainmentForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.10999/-</p>
    </div>
</div>



</div>

</section>
    </Fragment>
  )
}
