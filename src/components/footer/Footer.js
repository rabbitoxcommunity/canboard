import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className='primeply__footer'>
      <div className="upper__footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <div className="footer__widgets">
                <ul>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/products'>Products</Link></li>
                  <li><Link to='/vision'>Vision</Link></li>
                  <li><Link to='/innovation'>Innovation</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__widgets">
                <h5>Contact</h5>
                <p>Primeply Industries Ltd, Mill Road,<br /> Valapattanam, Kerala 670010</p>
                <a href="assets/prime_mob_brochure.pdf" target='_blank'><button className="btn btn-primary mt-5">Download Brochure</button></a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__widgets">
                <h5>Follow</h5>
                <div className="social__links">
                  <ul>
                    <li><a href="https://www.facebook.com/people/wuudply/100089879648776/?mibextid=LQQJ4d" target='_blank'>Facebook</a></li>
                    <li><a href="https://www.instagram.com/prime.ply/" target='_blank'>Instagram</a></li>
                    <li><a href="#" target='_blank'>Linkedin</a></li>
                    <li><a href="https://twitter.com/wuudply?s=21&t=fewMq4Eu06XGaJE98L2oIQ" target='_blank'>X</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="copyright"><p>© Copyright {year} Primeply</p></div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__logo__section">
            <div className="col-md-6 col-tab-12">
              <h2>Beyond Limits. <br />Beyond Ultra Quality.</h2>
            </div>
            <div className="footer__logo">
              <img src="assets/img/logo.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
