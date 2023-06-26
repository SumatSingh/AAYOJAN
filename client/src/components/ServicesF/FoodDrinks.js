// import React, { Fragment } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
export default function FoodDrinks() {
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

<h1 className="heading">food &<span> drinks</span></h1>

<div className="box-container">



<div className="box h-100">
    <img src="assets/New folder/FooDrink/Foodrink.jpg" alt="" />
    <h3 className="title">Mojito drinks</h3>
    <div className="icons">
        <Link to="/FdrinksForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.3999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/FooDrink/Foodrink_9.jpg" alt="" />
    <h3 className="title">Fresh'n Up</h3>
    <div className="icons">
        <Link to="/FdrinksForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.5999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/FooDrink/Foodrink_10.jpg" alt="" />
    <h3 className="title">Aura Fruit Bears</h3>
    <div className="icons">
        <Link to="/FdrinksForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.7999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/FooDrink/Foodrink_4.jpg" alt="" />
    <h3 className="title">Sumit Soda</h3>
    <div className="icons">
        <Link to="/FdrinksForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.6999/-</p>
    </div>
</div>
   


<div className="box h-100">
    <img src="assets/New folder/FooDrink/Foodrink_5.jpg" alt="" />
    <h3 className="title">Pulkit Bear Bar</h3>
    <div className="icons">
        <Link to="/FdrinksForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.12999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/FooDrink/Foodrink_6.jpg" alt="" />
    <h3 className="title">Hungry Folks Starters</h3>
    <div className="icons">
        <Link to="/FdrinksForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.9999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/FooDrink/Foodrink_7.jpg" alt="" />
    <h3 className="title">Starters food</h3>
    <div className="icons">
        <Link to="/FdrinksForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.2999/-</p>
    </div>
</div>

<div className="box h-100">
    <img src="assets/New folder/FooDrink/Foodrink_8.jpg" alt="" />
    <h3 className="title">Mouth Freshen Up</h3>
    <div className="icons">
        <Link to="/FdrinksForm" className="fas fa-">Book Now</Link>
        <p>@ Rs.1999/-</p>
    </div>
</div>
   

</div>

</section>
    </Fragment>
  )
}
