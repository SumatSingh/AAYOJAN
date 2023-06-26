import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <Fragment>
          <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10 mt-5">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="assets/New folder/BookNow/forgot_3.webp"
                      alt="login form" className="img-fluid h-100" style={{borderRadius: "1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
      
                      <form>
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                          <span className="h1 fw-bold mb-0">Evento</span>
                        </div>
      
                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:" 1px"}}>Sign into your account</h5>
      
                        <div className="form-outline mb-4">

                        <label className="form-label" htmlfor="email">Email address</label>
                          <input name='email' type="email" id="form2Example17" className="form-control form-control-lg text-lowercase" placeholder='enter your Email' minLength={10} maxLength={35} required/>
                          
                        </div>
      
      
                        <div className="pt-1 mb-4"><Link to="./submitotp" id="btn">SEND OTP</Link>
                          
                        </div>
      
                    
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
