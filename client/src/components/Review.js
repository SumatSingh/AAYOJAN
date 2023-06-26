import React from 'react'
import { Fragment } from 'react'
export default function Review() {
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
      
       <section className="reivew" id="review"> 
    
    <h1 className="heading">client's <span>review</span></h1>

    <div className="review-slider swiper-container">

        <div className="swiper-wrapper">


            <div className="swiper-slide box me-5">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src="Assets/images/client_pic1.jpg" alt=""/>
                    <div className="user-info">
                        <h3>Falcon Sumat</h3>
                        <span>happy clients</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
            </div>

            <div className="swiper-slide box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src="Assets/images/client_pic2.jpeg" alt=""/>
                    <div className="user-info">
                        <h3>Arun Chourasiya</h3>
                        <span>happy clients</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
            </div>

            <div className="swiper-slide box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src="Assets/images/client_pic3.jpeg" alt=""/>
                    <div className="user-info">
                        <h3>Rahul Singh</h3>
                        <span>happy clients</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
            </div>

            <div className="swiper-slide box">
                <i className="fas fa-quote-right"></i>
                <div className="user">
                    <img src="Assets/images/client_pic4.jpeg" alt=""/>
                    <div className="user-info">
                        <h3>Ravi Patel</h3>
                        <span>happy clients</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
            </div>

        </div>

    </div>

</section>
    </Fragment>
  )
}
