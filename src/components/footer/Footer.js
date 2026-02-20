import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className='primeply__footer panelex__footer'>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__logo__section panelex-height">
            <div className="row">
              <div className="col-md-6">
                <div className="panelex">
                  <ul>
                    <li><a href="#"><img src="/assets/panelex/fb.svg" alt="" /></a></li>
                    <li><a href="#"><img src="/assets/panelex/linkedin.svg" alt="" /></a></li>
                    <li><a href="#"><img src="/assets/panelex/twitter.svg" alt="" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panelex">
                  <p>Cannanore Panels Pvt Ltd<br />
                    Kannur, Kerala - 670595</p>
                </div>
              </div>
            </div>
            <div className="footer__logo">
              <p className='panelex'>© Copyright {year} Panelex</p>
              <img src="/assets/panelex/logo1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
