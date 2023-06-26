import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
export default function Price() {
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
       
       <section className="price" id="price">

<h1 className="heading"> our <span>price</span> </h1>

<div className="box-container">

    <div className="box">
        <h3 className="title">for birthdays</h3>
        <h3 className="amount">₹25000.99</h3>
        <ul>
            <li><i className="fas fa-check"></i>full services</li>
            <li> <i className="fas fa-check"></i> decorations </li>
            <li> <i className="fas fa-check"></i> music and photos </li>
            <li> <i className="fas fa-check"></i> food and drinks </li>
            <li> <i className="fas fa-check"></i> invitation card </li>
        </ul>
        <Link to="/SignIn" id="btn">Book Now</Link>
    </div>

    <div className="box">
        <h3 className="title">for weddings</h3>
        <h3 className="amount">₹45000.99</h3>
        <ul>
            <li><i className="fas fa-check"></i>full services</li>
            <li> <i className="fas fa-check"></i> decorations </li>
            <li> <i className="fas fa-check"></i> music and photos </li>
            <li> <i className="fas fa-check"></i> food and drinks </li>
            <li> <i className="fas fa-check"></i> invitation card </li>
        </ul>
        <Link to="/SignIn" id="btn">Book Now</Link>
    </div>

    <div className="box">
        <h3 className="title">for concerts</h3>
        <h3 className="amount">₹65000.99</h3>
        <ul>
            <li><i className="fas fa-check"></i>full services</li>
            <li> <i className="fas fa-check"></i> decorations </li>
            <li> <i className="fas fa-check"></i> music and photos </li>
            <li> <i className="fas fa-check"></i> food and drinks </li>
            <li> <i className="fas fa-check"></i> invitation card </li>
        </ul>
        <Link to="/SignIn" id="btn">Book Now</Link>
    </div>

    <div className="box">
        <h3 className="title">for Others</h3>
        <h3 className="amount">₹85000.99</h3>
        <ul>
            <li><i className="fas fa-check"></i>full services</li>
            <li> <i className="fas fa-check"></i> decorations </li>
            <li> <i className="fas fa-check"></i> music and photos </li>
            <li> <i className="fas fa-check"></i> food and drinks </li>
            <li> <i className="fas fa-check"></i> invitation card </li>
        </ul>
        <Link to="/SignIn" id="btn">Book Now</Link>
    </div>

</div>


</section>
    </Fragment>
  )
}
