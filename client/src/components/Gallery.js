import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
export default function Gallery() {
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

                <h1 className="heading">our <span>gallery</span></h1>

                <div className="box-container">

                    <div className="box">
                        <img src="assets/images/gpic2.jpg" alt="" />
                        <h3 className="title">DJ Program</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic3.jpg" alt="" />
                        <h3 className="title">Gallery Design</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic4.jpg" alt="" />
                        <h3 className="title">Food System</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic6.jpg" alt="" />
                        <h3 className="title">Birthday Party</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic7.jpg" alt="" />
                        <h3 className="title">photos and events</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic8.jpg" alt="" />
                        <h3 className="title">Dulha & Dulhan Stage Entry</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic9.jpg" alt="" />
                        <h3 className="title">Mehandi Program</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic10.jpg" alt="" />
                        <h3 className="title">Stage Program</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic11.jpg" alt="" />
                        <h3 className="title">Selfie Point</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="assets/images/gpic12.jpg" alt="" />
                        <h3 className="title">Catering  Services</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                    <div className="box" style={{ color: "white", textAlign: "center", fontSize: "40px" }}>
                        <img src="assets/images/gpici1.jpg" alt="Many Others" />
                        <h3 className="title">Planning for all events are done here. For planning feel free to contact us</h3>
                        <div className="icons">
                            <Link to="#" className="fas fa-heart"></Link>
                            <Link to="#" className="fas fa-share"></Link>
                            <Link to="#" className="fas fa-eye"></Link>
                        </div>
                    </div>

                </div>

            </section>

        </Fragment>
    )
}
