import React from 'react'
import { Fragment } from 'react'
// import { Link } from 'react-router-dom';
export default function InviteForm() {
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

                                                <h5 className="fw-normal mb-1 pb-3" style={{ letterSpacing: "1px" }}>Fill details to be printed on card</h5>


                                                {/* <div className="form-outline mb-1">
                                                    <label className="form-label" htmlfor="form2Example17">Type of card </label>
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg" />

                                                </div> */}

                                                 
                                                <select class="form-select" aria-label="Disabled select example" disabled>
                                                    <option selected>Type of card </option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>


                                                <div className="form-outline mb-1">
                                                    <label className="form-label" htmlfor="form2Example17">Groom Name</label>
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg" />

                                                </div>

                                                <div className="form-outline mb-1">
                                                    <label className="form-label" htmlfor="form2Example17">Bride Name</label>
                                                    <input type="text" id="form2Example17" className="form-control form-control-lg" />

                                                </div>

                                                <div className="form-outline mb-1">
                                                    <label className="form-label" htmlfor="form2Example17">Date Of Marriage </label>
                                                    <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />

                                                </div>

                                                <div class="col-md-lg-sm-6 row-1">
                                                    <label for="inputEmail4" class="form-label">Venue</label>
                                                    <input type="email" class="form-control" id="inputEmail4" />
                                                </div>


                                                <div class="col-md-6 row-1">
                                                    <label for="tel" class="form-label">Contact Number</label>
                                                    <input type="tel" class="form-control" id="inputtel" placeholder='+91' />
                                                </div>


                                                <div class="col-md-6">
                                                    <label for="number" class="form-label">No. of card to be printed</label>
                                                    <input type="number" class="form-control" id="number" />
                                                </div>




                                                {/* <div className="form-outline mb-1">
                        <label className="form-label" htmlfor="form2Example17">Email address</label>
                          <input type="email" id="form2Example17" className="form-control form-control-lg" />
                          
                        </div>
      
                        <div className="form-outline mb-1">
                        <label className="form-label" htmlfor="form2Example27">Password</label>
                          <input type="password" id="form2Example27" className="form-control form-control-lg" />
                         
                        </div>

                        <div className="form-outline mb-1">
                        <label className="form-label" htmlfor="form2Example27">Confirm Password</label>
                          <input type="password" id="form2Example27" className="form-control form-control-lg" />
                         
                        </div> */}

                                                <div className="pt-1 mb-1">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button">Submit</button>
                                                </div>

                                                {/* <Link className="small text-muted" to="#!">Forgot password?</Link> */}
                                                {/* <p className="mb-3 pb-lg-2" style={{color:" #393f81"}}><Link to="/signin"
                            style={{color:" #393f81"}}>Already have an account</Link></p>
                        <Link to="#!" className="small text-muted">Terms of use.</Link>
                        <Link to="#!" className="small text-muted">Privacy policy</Link> */}
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

