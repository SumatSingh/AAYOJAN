import React from 'react'
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  let [navBarState, setNavBarState] = useState('navbar');
  const [user, setUser]  = useState();
  let menu = (btn) => {
    btn.target.classList.toggle('fa-times');
    if (navBarState.split(' ').length > 1) {
      setNavBarState('navbar');
    } else {
      setNavBarState('navbar active');
    }
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Info")));
}, []);
  return (
    <>

      <header className="header">

        <Link to="/" className="logo">A<span>A</span>YOJ<span>A</span>N</Link>

        <nav className={navBarState}>
          <Link to="/">home</Link>
          <Link to="/services">service</Link>
          <Link to="/about">about</Link>
          <Link to="/gallery">gallery</Link>
          <Link to="/price">price</Link>
          <Link to="/review">review</Link>
          <Link to="/contact">contact</Link>

          <div className='mb-4'>
            {
              user ? <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {user.name}
                        </a>
                        <ul class="dropdown-menu fs-3">
                        <li><button class="dropdown-item" onClick={()=>{localStorage.removeItem("Info"); window.location.reload(false); }} >Logout</button></li>
                        </ul>
                      </li>
              : <Link to="/SignIn" id="btn">Log In</Link>
            }
         
          {/* {user ? user.name : <Link to="/SignIn" id="btn">Log In</Link>} */}
            {/* <Link to="/SignIn" id="btn">Log In</Link> */}
          </div>
          {/* <button className="btn btn-dark btn-lg btn-block" type="button"><Link to="/signin">Login</Link></button> */}

        </nav>

        <div id='menu-bars' className="fas fa-bars" onClick={menu}></div>

      </header>
    </>
  )
}
