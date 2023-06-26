import React from 'react'
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
export default function Footer() {
  return (
    <Fragment>
       <section className="footer mt-5">

<div className="box-container ">

    <div className="box">
        <h3>branches</h3>
        <Link to="#"> <i className="fas fa-map-marker-alt"></i> Sagar </Link>
        <Link to="#"> <i className="fas fa-map-marker-alt"></i> Gwalior </Link>
        <Link to="#"> <i className="fas fa-map-marker-alt"></i> Morena </Link>
        <Link to="#"> <i className="fas fa-map-marker-alt"></i> Bhopal </Link>
        <Link to="#"> <i className="fas fa-map-marker-alt"></i> Jhansi </Link>
    </div>

    <div className="box">
        <h3>quick links</h3>
        <Link to="/"> <i className="fas fa-arrow-right"></i> home </Link>
        <Link to="/services"> <i className="fas fa-arrow-right"></i> service </Link>
        <Link to="/about"> <i className="fas fa-arrow-right"></i> about </Link>
        <Link to="/gallery"> <i className="fas fa-arrow-right"></i> gallery </Link>
        <Link to="price"> <i className="fas fa-arrow-right"></i> price </Link>
        <Link to="review"> <i className="fas fa-arrow-right"></i> reivew </Link>
        <Link to="contact"> <i className="fas fa-arrow-right"></i> contact </Link>
    </div>

    <div className="box">
        <h3>contact info</h3>
        <Link to="#"> <i className="fas fa-phone"></i> +91 8982443551 </Link>
        <Link to="#"> <i className="fas fa-phone"></i> +91 6266061584 </Link>
        <Link to="#"> <i className="fas fa-envelope"></i> srmorena1802@gmail.com </Link>
        <Link to="#"> <i className="fas fa-envelope"></i> aarushkush@gmail.com </Link>
        <Link to="#"> <i className="fas fa-map-marker-alt"></i> Sagar, india - 470004 </Link>
    </div>

    <div className="box">
        <h3>follow us</h3>
        <Link to="#"> <i className="fab fa-facebook-f"></i> facebook </Link>
        <Link to="#"> <i className="fab fa-twitter"></i> twitter </Link>
        <Link to="#"> <i className="fab fa-instagram"></i> instagram </Link>
        <Link to="#"> <i className="fab fa-linkedin"></i> linkedin </Link>
    </div>

</div>

<div className="credit">© created by <span>mr. SSR</span> | all rights reserved </div>

</section>
    </Fragment>
  )
}
