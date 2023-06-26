import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

export default function Invitation() {
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

<h1 className="heading">our <span>Invitation</span></h1>

<div className="box-container">


<div className="box h-100">
    <img src="assets/New folder/card/card_10.jpg" alt="" />
    <h3 className="title">Design 1</h3>
    <div className="icons">
        <Link to="/InviteForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.119/- per card</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/card/card_18.jpg" alt="" />
    <h3 className="title">Design 2</h3>
    <div className="icons">
        <Link to="/InviteForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.139/- per card</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/card/card_16.jpg" alt="" />
    <h3 className="title">Design 3</h3>
    <div className="icons">
        <Link to="/InviteForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.79/- per card</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/card/card_7.png" alt="" />
    <h3 className="title">Design 4</h3>
    <div className="icons">
        <Link to="/InviteForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.59/- per card</p>
    </div>
</div>
   


<div className="box h-100">
    <img src="assets/New folder/card/card_3.jpg" alt="" />
    <h3 className="title">Design 5</h3>
    <div className="icons">
        <Link to="/InviteForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.99/- per card</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/card/card_13.jpg" alt="" />
    <h3 className="title">Design 6</h3>
    <div className="icons">
        <Link to="/InviteForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.69/- per card</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/card/card_15.jpg" alt="" />
    <h3 className="title">Design 7</h3>
    <div className="icons">
        <Link to="/InviteForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.59/- per card</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/card/card_19.jpg" alt="" />
    <h3 className="title">Design 8</h3>
    <div className="icons">
        <Link to="/InviteForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.29/- per card</p>
    </div>
</div>



</div>

</section>
    </Fragment>

  )
}
