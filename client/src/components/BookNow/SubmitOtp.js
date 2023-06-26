import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'

export default function SubmitOtp() {
  return (
    <Fragment>
          <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-9 mt-5">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
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

                        <label className="form-label" htmlfor="form2Example17">New Password</label>
                          <input type="email" id="form2Example17" className="form-control form-control-lg text-lowercase" placeholder='enter your password' required minLength={8} maxLength={16}/>
                          
                        </div>
      
                        <div className="form-outline mb-4">
                        <label className="form-label" htmlfor="form2Example27">Confirm Password</label>
                          <input type="password" id="form2Example27" className="form-control form-control-lg text-lowercase" placeholder='enter your confirm password' required minLength={8} maxLength={16}/>
                          
                        </div>
      
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button">SignIn</button>
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
