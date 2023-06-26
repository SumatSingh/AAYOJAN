import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
export default function CustomFood() {
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

<h1 className="heading">custom <span> food</span></h1>

<div className="box-container">



<div className="box h-100">
    <img src="assets/New folder/Food/Food_2.jpg" alt="" />
    <h3 className="title">Sanjay Catering Service</h3>
    <div className="icons">
        <Link to="/CfoodForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.45999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Food/Food_4.jpg" alt="" />
    <h3 className="title">Adheera Caterers</h3>
    <div className="icons">
        <Link to="/CfoodForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.59999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Food/Food_5.jpg" alt="" />
    <h3 className="title">Arru Catering</h3>
    <div className="icons">
        <Link to="/CfoodForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.35999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Food/Food_6.jpg" alt="" />
    <h3 className="title">Sumat Catering Service</h3>
    <div className="icons">
        <Link to="/CfoodForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.37999/-</p>
    </div>
</div>
   


<div className="box h-100">
    <img src="assets/New folder/Food/Food_1.webp" alt="" />
    <h3 className="title">Royal Food</h3>
    <div className="icons">
        <Link to="/CfoodForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.12999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Food/Food_7.jpeg" alt="" />
    <h3 className="title">Pulkit Caterers</h3>
    <div className="icons">
        <Link to="/CfoodForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.19999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Food/Food_4.webp" alt="" />
    <h3 className="title">Shraddha Catering Service</h3>
    <div className="icons">
        <Link to="/CfoodForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.15999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/Food/Food_8.jpg" alt="" />
    <h3 className="title">Ramesh Caterers</h3>
    <div className="icons">
        <Link to="/CfoodForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.19999/-</p>
    </div>
</div>

   

</div>

</section>
    </Fragment>
  )
}
