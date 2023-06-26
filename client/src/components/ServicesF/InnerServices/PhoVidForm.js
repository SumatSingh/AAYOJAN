import React from 'react'
import { Fragment } from 'react'
// import { Link } from 'react-router-dom';
export default function PhoVidForm() {
  return (
     <Fragment>
        <section className="vh-100" style={{backgroundColor: "#9A616D"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-9 mt-5">
              <div className="card" style={{borderRadius: "1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="assets/New folder/BookNow/sign_up2.jpg"
                      alt="login form" className="img-fluid h-100" style={{borderRdius:" 1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
      
                      <form>
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                          <span className="h1 fw-bold mb-0"><span>E</span>vento</span>
                        </div>
      
                        <h5 className="fw-normal mb-1 pb-3" style={{letterSpacing: "1px"}}>Studio Name</h5>
                        
                        <div className="form-outline mb-1">
                        <label className="form-label" htmlfor="form2Example17">Customer Name</label>
                            <input type="text" id="form2Example17" className="form-control form-control-lg" placeholder='enter your name'/>
                            
                        </div>

                        <div className="form-outline mb-1">
                        <label className="form-label" htmlfor="form2Example17">date for shoot</label>
                            <input type="date" id="form2Example17" className="form-control form-control-lg"/>
                            
                        </div>

                        <div className="form-outline mb-1">
                        <label className="form-label" htmlfor="form2Example17">No. of days</label>
                          <input type="number" id="form2Example17" className="form-control form-control-lg" placeholder='0'/>
                          
                        </div>
                        <div className="form-outline mb-1">
                        <label className="form-label" htmlfor="form2Example17">Contact No.</label>
                            <input type="tel" id="form2Example17" className="form-control form-control-lg" placeholder='enter your phone number'/>
                            
                        </div>

      
                        <div className="form-outline mb-1">
                        <label className="form-label" htmlfor="form2Example27">price</label>
                          <input type="tel" id="form2Example27" className="form-control form-control-lg" placeholder='Rs./-'/>
                         
                        </div>

      
                        <div className="pt-1 mb-1">
                          <button className="btn btn-dark btn-lg btn-block mt-2" type="button">Preview</button>
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

