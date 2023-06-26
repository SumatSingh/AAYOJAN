// import React, { Fragment } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
export default function VenueCard() {
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

<h1 className="heading">our <span>venue</span></h1>

<div className="box-container">


<div className="box h-100">
    <img src="assets/New folder/Venue/venue_2.jpg" alt="" />
    <h3 className="title">Radhika Palace</h3>
    <div className="icons">
        <Link to={`/VcardForm?price=99999&venue=Radhika Palace`} className="fas fa-">Book Now</Link>
        <p id="price-gwl">@ Rs.99999/-</p>
        <h5 id="place-gwl"><i className="fas fa-map-marker-alt"> </i>  8 Dukan Thatipur, Gwalior</h5>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Venue/venue_4.jpg" alt="" />
    <h3 className="title">TR Puram</h3>
    <div className="icons">
        <Link to="/VcardForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.79999/-</p>
        <h5><i className="fas fa-map-marker-alt"> </i>  Tussipura,Jhansi</h5>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Venue/venue_8.jpg" alt="" />
    <h3 className="title">BL Garden</h3>
    <div className="icons">
        <Link to="/VcardForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.59999/-</p>
        <h5><i className="fas fa-map-marker-alt"> </i> 118 Reshampura,Morena</h5>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Venue/venue_12.jpg" alt="" />
    <h3 className="title">Sunshine Party Hall</h3>
    <div className="icons">
        <Link to="/VcardForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.21999/-</p>
        <h5><i className="fas fa-map-marker-alt"> </i>  Aadarsh Nagar,Pinto Park ,Gwalior</h5>
    </div>
</div>
   


<div className="box h-100">
    <img src="assets/New folder/Venue/venue_15.jpg" alt="" />
    <h3 className="title">BN Garden</h3>
    <div className="icons">
        <Link to="/VcardForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.12199/-</p>
        <h5><i className="fas fa-map-marker-alt"> </i>  125 Station Road, Morena</h5>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Venue/venue_9.jpg" alt="" />
    <h3 className="title">Rajbagh Marriage Home</h3>
    <div className="icons">
        <Link to="/VcardForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.111111/-</p>
        <h5><i className="fas fa-map-marker-alt"> </i>  NH-6 Oxford Street, Gwalior</h5>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Venue/venue_10.jpg" alt="" />
    <h3 className="title">Hotel Adityaz</h3>
    <div className="icons">
        <Link to="/VcardForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.159999/-</p>
        <h5><i className="fas fa-map-marker-alt"> </i>  DD Nagar Shatabdi Puram, Gwalior</h5>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Venue/venue_14.jpg" alt="" />
    <h3 className="title">Sanjay Party Hall</h3>
    <div className="icons">
        <Link to="/VcardForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.49999/-</p>
        <h5><i className="fas fa-map-marker-alt"> </i> In front of Royal furniture,KP Nagar, Jhansi</h5>
    </div>
</div>

   
   

</div>

</section>
    </Fragment>
  )
}
