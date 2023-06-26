import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
export default function Services() {
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

            <section className="service" id="service">

                <h1 className="heading"> our <span>services</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>venue selection</h3>
                        <p>You can select the venue from the list provided.</p>
                        <Link to="/VenueCard" id="btn">check out</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-envelope"></i>
                        <h3>invitation card</h3>
                        <p>Decorated and attractive invitation card are made.</p>
                        <Link to="/Invitation" id="btn">check out</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-music"></i>
                        <h3>Entertainment</h3>
                        <p>Various types of entertainment are provided.</p>
                        <Link to="/EnterTainment" id="btn">check out</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-utensils"></i>
                        <h3>food and drinks</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
                        <Link to="/FoodDrinks" id="btn">check out</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-photo-video"></i>
                        <h3>Photos and Videos</h3>
                        <p>Photos and videos of previous events are available here.</p>
                        <Link to="/PhoVid" id="btn">check out</Link>
                    </div>

                    <div className="box">
                        <i className="fas fa-birthday-cake"></i>
                        <h3>Custom Food</h3>
                        <p>Varieties of food are provided at very cheaper rate.</p>
                        <Link to="/CustomFood" id="btn">check out</Link>
                    </div>



                </div>

            </section>


        </Fragment>
    )
}