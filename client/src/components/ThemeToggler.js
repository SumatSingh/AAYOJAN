import React from 'react'
import { useState, useEffect } from 'react';
import { Fragment } from 'react'
export default function ThemeToggler() {

  let [themeTogglerClasses, setThemeTogglerClasses] = useState('theme-toggler');
  window.onscroll = () => {
    setThemeTogglerClasses('theme-toggler');
  }

  //let color = btn.style.background;
  //
  let activeTheme = () => {
    if (themeTogglerClasses.split(' ').length > 1) {
      setThemeTogglerClasses('theme-toggler');
    }else {
      setThemeTogglerClasses('theme-toggler active');
    }
  }

  let setTheme = (element) => {
    let color = element.target.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

  useEffect(() => {
    
  })

  return (
    <Fragment>
      <div className={themeTogglerClasses}>

        <div className="toggle-btn"  onClick={activeTheme}>
          <i className="fas fa-cog"></i>
        </div>

        <h3>choose color</h3>

        <div className="buttons">
          <div className="theme-btn" style={{ background: "#3867d6" }} onClick={setTheme}></div>
          <div className="theme-btn" style={{ background: "#f7b731" }} onClick={setTheme}></div>
          <div className="theme-btn" style={{ background: "#ff0033" }} onClick={setTheme}></div>
          <div className="theme-btn" style={{ background: "#20bf6b" }} onClick={setTheme}></div>
          <div className="theme-btn" style={{ background: "#fa8231" }} onClick={setTheme}></div>
          <div className="theme-btn" style={{ background: "#FC427B" }} onClick={setTheme}></div>
        </div>
      </div>
    </Fragment>
  )
}
