import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import { createUser } from '../axios.js';

export default function SignUp() {
  const navigate = useNavigate()
  const [name , setName] = useState()
  const [surname , setSurname] = useState()
  const [phone , setPhone] = useState()
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const [cnfpassword , setCnfpassword] = useState();
  const [err , setErr] = useState(false);
  const [errmsg , setErrmsg] = useState();
  

  const signupUser = async()=>{
    try {
      if(password != cnfpassword){
        setErr(true);
        setErrmsg("confirm password not matched.");
        console.log("pass not matched");
        return;
      }
   
      const data = await axios.post("http://localhost:5000/api/v1/register", {
        name,surname, phone ,email,password
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
      // console.log(error.response.data.Error)
      setErr(true)
      setErrmsg(error.response.data.Error);
    }

  }
  // const [userRegistration, setuserRegistration] = useState({
  //    username:"",
  //    fullname:"",
  //    phone:"",
  //    email:"",
  //    password:"",
  //    confirmpassword:""
  // });

  // const [records, setRecords] = useState([]);

  //   const handleInput = (e) => {
  //       const name = e.target.name;
  //       console.log(name);
  //       const value = e.target.value;
  //       console.log(value);


  //       setuserRegistration ({...userRegistration, [name]: value})
  //   }

  //   const handleSubmit = (e) => {
  //           e.preventDefault();

  //           const newRecord = { ...userRegistration, id:new Date().getTime().toString()}
  //           console.log(records);

  //           setRecords([...records, newRecord]);
  //           console.log(records);

  //           setuserRegistration({username:"", fullname:"", phone:"", email:"", password:"", confirmpassword:""});
  //   }

  // let SignUP = (form) => {
    // console.log(form.target.email)
    // axios.post(
    //   'http://localhost:3001/user/create-user',
    //   {
    //     email: form.email.value,
    //     fname: form.fname.value,
    //     lname: form.lname.value,
    //     number: form.number.value,
    //     password: form.password.value
    //   }).then((response) => {
    //     window.localStorage.setItem('email', response.data?.email);
    //     window.localStorage.setItem('number', response.data?.number);
    //     window.localStorage.setItem('lname', response.data?.lname);
    //     window.localStorage.setItem('fname', response.data?.fname);
    //     window.localStorage.setItem('isAdmin', false);

    //     window.location.replace('http://localhost:3000/')

    //   }).catch((error) => {
    //     window.alert(error.response?.data);
    //   })

  return(
    <Fragment>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-9 mt-5">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-4 col-lg-4 d-none d-md-block">
                    <img src="assets/New folder/BookNow/sign_up2.jpg"
                      alt="login form" className="img-fluid h-100" style={{ borderRdius: " 1rem 0 0 1rem" }} />
                  </div>
                  <div className="col-md-4 col-lg-5 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      {/* <form id="form" onSubmit={false}> */}

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                          <span className="h1 fw-bold mb-0"><span>E</span>vento</span>
                        </div>

                        <h5 className="fw-normal mb-1 pb-3" style={{ letterSpacing: "1px" }}>SignUp into your account</h5>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="fname">Name</label>
                          <input autoCapitalize='off' name='fname' type="text" onChange={(e)=>setName(e.target.value)}
                            id="form2Example17" className="form-control form-control-lg " placeholder='enter your name' required minLength={3} maxLength={12} />

                        </div>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="lname">Surname</label>
                          <input autoCapitalize='off' name='lname' type="text" onChange={(e)=>setSurname(e.target.value)}
                            id="form2Example17" className="form-control form-control-lg " placeholder='enter your surname' required minLength={3} maxLength={12} />

                        </div>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="number">Contact No.</label>
                          <input autoCapitalize='off' name="number" type="phone" onChange={(e)=>setPhone(e.target.value)}
                            id="form2Example17" className="form-control form-control-lg " placeholder='+91' required minLength={10} maxLength={10} />

                        </div>

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="email">Email address</label>
                          <input autoCapitalize='off' name="email" type="email" onChange={(e)=>setEmail(e.target.value)}
                            id="form2Example17" className="form-control form-control-lg text-lowercase" placeholder='enter email' required minLength={8} maxLength={35} />
                        </div>

     

                        <div className="form-outline mb-1">
                          <label className="form-label" htmlFor="password">Password</label>
                          <input autoCapitalize='off' name="password" type="password" onChange={(e)=>setPassword(e.target.value)}
                        id="form2Example27" className="form-control form-control-lg " placeholder='********' required minLength={8} maxLength={16} />

                        </div>

                          <div className="form-outline mb-1">
                            <label className="form-label" htmlFor="confirmpassword">Confirm Password</label>
                            <input autoCapitalize='off' name="confirmpassword" type="confirmpassword" onChange={(e)=>setCnfpassword(e.target.value)}
                              id="form2Example27" className="form-control form-control-lg" placeholder='confirm pswd' required minLength={8} maxLength={16} checked />

                          </div>
                          {
                            err ? <div className='form-outline mb-1'>
                            <p style={{color:"red"}}  >{errmsg}</p>
                          </div> : "" 
                          }

                        <div className="pt-1 mb-1">
                          <button className="btn btn-dark btn-lg btn-block" onClick={signupUser} >SignUp</button>
                        </div>                

                        <Link className="small text-muted" to="#!">Forgot password?</Link>
                        <p className="mb-3 pb-lg-2" style={{ color: " #393f81" }}><Link to="/signin"
                          style={{ color: " #393f81" }}>Already have an account</Link></p>
                        <Link to="#!" className="small text-muted">Terms of use.</Link>
                        <Link to="#!" className="small text-muted">Privacy policy</Link>
                      
                      {/* 
                    <div>
                      {
                          records.map((curElem) => {
                            const { id, username, fullname, email, phone, password, confirmpassword} = curElem;
                            return (
                              <div className="showDataStyle" key={curElem.id}>
                                <p>{username}</p>
                                <p>{fullname}</p>
                                <p>{phone}</p>
                                <p>{email}</p>
                                <p>{password}</p>
                                <p>{confirmpassword}</p>
                              </div>
                            )
                          })

                        }
                    </div> */}


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
