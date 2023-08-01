import React, { useState } from 'react'
import '../assets/css/Header.css'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

  const [isNavOpen, setNavOpen] = useState(false);

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 800) {
      var menu = document.querySelector("nav");
      menu.className = "desktop-menu";
      setNavOpen(false);
    }
  })

  const toggleMenu = () => {
    setNavOpen(!isNavOpen);
  }

  return (
    <header>

      <div className="logo">
        <Link to='/'><ion-icon name="compass"></ion-icon>Web&nbsp;<span>Navigators</span></Link>
      </div>

      <nav className={isNavOpen === true ? 'mobile-menu' : 'desktop-menu'}>
        <NavLink to='/' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="home"></ion-icon> Home</NavLink>
        <NavLink to='/what-we-do' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="shapes"></ion-icon> What We Do?</NavLink>
        <NavLink to='/work' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="ribbon"></ion-icon> Work</NavLink>
        <NavLink to='/start-project' onClick={isNavOpen === true ? toggleMenu : ''}><ion-icon name="infinite"></ion-icon> Start Project</NavLink>
      </nav>

      <div className={`toggle-menu ${isNavOpen === false ? '' : 'change'}`} onClick={toggleMenu}>

        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>

      </div>

    </header>
  )
}
