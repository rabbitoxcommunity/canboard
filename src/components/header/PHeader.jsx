import React, { useEffect, useState } from 'react'
import './Header.scss'
import '../../pages/panelex.scss'
import ScrollTop from '../ScrollTop'
import { Link, useLocation } from 'react-router-dom';
export default function PHeader() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [homePage, sethomePage] = useState(false)
  const [menuActive, setmenuActive] = useState(false)
  const location = useLocation()

  const isPanelexRoute = location?.pathname === '/panelex' || location?.pathname === '/panelex/' || location?.pathname === '/panelex/mission';

  useEffect(() => {
    if (location.pathname == '/') {
      sethomePage(true)
      setmenuActive(false)
    } else {
      sethomePage(false)
      setmenuActive(false)
    }
  }, [location.pathname])



  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolledDown(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleMenu = () => {
    setmenuActive(!menuActive)
  }


  return (
    <>
      <div
        className={`main__header panelex__header ${menuActive ? 'show' : ''} ${isPanelexRoute ? 'header_white' : ''
          }`}
      >
        <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolledDown ? 'sticked' : ''}`}>
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <Link to='/panelex' className={`logo d-flex align-items-center ${homePage ? 'logo-home' : ''}`}>
              <img src="/assets/panelex/logo1.png" alt="" />
            </Link>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav className="navbar">
              <Link to='/panelex/contact' style={{ textDecoration: 'none' }}> <div className="contact btn btn-primary hidden-xs">Contact <img src="/assets/img/menubtn-arrow.svg" alt="" /></div></Link>

              <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={handleMenu}>
                <div className={`line bg-white ${homePage && 'home-line'}`}></div>
                <div className={`line bg-white ${homePage && 'home-line'}`} ></div>
              </div>
            </nav>
          </div>
        </header>

        {/* MENU ITEMS */}
        <div className={`menu__lists ${menuActive ? 'show' : ''}`}>
          <div className="container">
            <div className="menu__items">
              <ul>
                <li><Link to='/panelex/about'>About</Link></li>
                <li><Link to='/panelex/products'>Product</Link></li>
                <li><Link to='/panelex/mission'>Mission</Link></li>
                <li><Link to='/panelex/contact'>contact</Link></li>
              </ul>
              <div className="logo__menu">
                <img src="/assets/panelex/logo1.png" alt="" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
