import React from 'react'
import { Fragment } from 'react'
// import { Link } from 'react-router-dom';
export default function VcardForm() {
  const params = new URLSearchParams(window.location.search);
  console.log(params);
  return (
    <Fragment>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-9 mt-5">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="assets/New folder/BookNow/sign_up2.jpg"
                      alt="login form" className="img-fluid h-100" style={{ borderRdius: " 1rem 0 0 1rem" }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                          <span className="h1 fw-bold mb-0"><span>E</span>vento</span>
                        </div>

                        <h5 className="fw-normal mb-1 pb-3" style={{ letterSpacing: "1px" }}>Enter Details for Booking</h5>


                        <select className="form-select" aria-label="Disabled select example" disabled>
                          <option>{params.get('venue') || "Selected Venue"}</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>


                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form2Example17">Customer Name</label>
                          <input type="text" id="form2Example17" className="form-control form-control-lg" placeholder='enter you name' aria-required />

                        </div>


                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form2Example17"></label>venue price
                          <input type="num" id="form2Example17" className="form-control form-control-lg" aria-required placeholder='rs.99999/-' disabled value={ params.get('price') || "Out of your budget"} />

                        </div>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form2Example17">contact number</label>
                          <input type="tel" id="form2Example17" className="form-control form-control-lg" aria-required placeholder='enter your phone no.' />

                        </div>


                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form2Example17">Date of marriage</label>
                          <input type="date" id="form2Example17" className="form-control form-control-lg" aria-required />

                        </div>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="form2Example27">remark</label>
                          <input type="remark" id="form2Example27" className="form-control form-control-lg" aria-required placeholder='remark' />

                        </div>


                        <div className="pt-1 mb-1">
                          <button className="btn btn-dark btn-lg btn-block mt-2" type="submit">submit</button>
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

