import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignIn() {
const navigate =  useNavigate();
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();
 const [err , setErr] = useState(false);
 const [errmsg , setErrmsg] = useState();
//  console.log(email);
//  console.log(password);
 const userlogin = async()=>{
  try {
   
    const data = await axios.post("http://localhost:5000/api/v1/login", {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    console.log(data);
    console.log(data.data);
    const info = JSON.stringify(data.data);
    localStorage.setItem("Info", info);
   
    navigate("/")
    window.location.reload(false);
   
  } catch (error) {
    console.log(error);
    setErr(true)
    setErrmsg(error.response.data.error);
  }
}
  return (
    <Fragment>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col col-xl-10 mt-5">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="assets/New folder/BookNow/signin_5.webp"
                      alt="login form" className="img-fluid h-100" style={{ borderRadius: "1rem 0 0 1rem" }} area-required="true" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                          <span className="h1 fw-bold mb-0">Evento</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: " 1px" }}>Sign into your account</h5>

                        <div className="form-outline mb-4">

                          <label className="form-label" htmlFor="email">Email address</label>
                          <input name='email' type="email" id="form2Example17" onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg text-lowercase" area-required="true" minLength={8} maxLength={35} placeholder="enter your email" required/>

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input name='password' type="password" id="form2Example27" onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-lg text-lowercase" area-required="true" minLength={8} maxLength={16} placeholder="enter your password" required/>

                        </div>
                        {
                            err ? <div className='form-outline mb-1'>
                            <p style={{color:"red"}}  >{errmsg}</p>
                          </div> : "" 
                          }


                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="button" onClick={userlogin}>Sign In</button>
                        </div>
                        {/* <div>
                        <Link to="/Dashboard" id="btn">Sign In</Link>
                        </div> */}
                         

                        <Link className="small text-muted" to="/forgot">Forgot password?</Link>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <Link to="/SignUp"
                          style={{ color: "#393f81" }}>Register here</Link></p>
                        <Link to="#!" className="small text-muted">Terms of use.</Link>
                        <Link to="#!" className="small text-muted">Privacy policy</Link>
                     

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
