import React, { useEffect, useState } from 'react'
import './Header.scss'
import ScrollTop from '../ScrollTop'
import { Link, useLocation } from 'react-router-dom';
export default function Header() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [homePage, sethomePage] = useState(false)
  const [menuActive, setmenuActive] = useState(false)
  const [productSubmenu, setProductSubmenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname == '/' || location.pathname == '/mission') {
      sethomePage(true)
      setmenuActive(false)
      setProductSubmenu(false)
    } else {
      sethomePage(false)
      setmenuActive(false)
      setProductSubmenu(false)
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
    if (menuActive) setProductSubmenu(false)
  }

  const toggleProductSubmenu = (e) => {
    e.preventDefault();
    setProductSubmenu(!productSubmenu);
  }


  return (
    <>
      <div className={`main__header ${menuActive ? 'show' : ''}`}>
        <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolledDown ? 'sticked' : ''}`}>
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <Link to='/' className={`logo d-flex align-items-center ${homePage ? 'logo-home' : ''}`}>
              <img src="/assets/img/logo.svg" alt="" />
            </Link>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav className="navbar">
              <Link to='/contact' style={{ textDecoration: 'none' }}> <div className={`contact btn btn-primary ${homePage && 'home-btn'}`}>Get a Sample <img src="/assets/img/menubtn-arrow.svg" alt="" /></div></Link>

              <div className={`menu-toggle ${menuActive ? 'active' : ''}`} onClick={handleMenu}>
                <div className={`line ${homePage && 'home-line'}`}></div>
                <div className={`line ${homePage && 'home-line'}`} ></div>
              </div>
            </nav>
          </div>
        </header>

        {/* MENU ITEMS */}
        <div className={`menu__lists ${menuActive ? 'show' : ''}`}>
          <div className="container">
            <div className="menu__items">
              {!productSubmenu ? (
                <ul className="main-nav-list">
                  <li data-aos="fade-up" data-aos-delay="100"><Link to='/about' onClick={handleMenu}>About</Link></li>
                  <li data-aos="fade-up" data-aos-delay="200" className="has-submenu">
                    <a href="#" onClick={toggleProductSubmenu}>Products</a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300"><Link to='/mission' onClick={handleMenu}>Mission</Link></li>
                  <li data-aos="fade-up" data-aos-delay="400"><Link to='/contact' onClick={handleMenu}>Contact</Link></li>
                </ul>
              ) : (
                <div className="submenu-view">
                  <div className="back-arrow" onClick={toggleProductSubmenu}>
                    <img src="/assets/img/canboard/menu-back.svg" alt="Back" />
                  </div>
                  <ul className="submenu-list">
                    <li data-aos="fade-up" data-aos-delay="100"><Link to='/products/europa' onClick={handleMenu}>Europa</Link></li>
                    <li data-aos="fade-up" data-aos-delay="200"><Link to='/products/indus' onClick={handleMenu}>Indus</Link></li>
                  </ul>
                </div>
              )}
              <div className="logo__menu">
                <img src="/assets/img/logo.svg" alt="Canboard" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
