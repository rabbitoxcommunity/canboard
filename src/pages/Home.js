import Aos from 'aos';
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="primeply__banner main__banner p-0" style={{backgroundImage:'url(assets/img/banner.jpg)'}}>
        <div className="container">
        <div className="banner__content">
          <h1 data-aos="fade-in">Beyond Limits.</h1>
          <h1 data-aos="fade-in">Beyond Quality.</h1>
        </div>
        </div>
      </section>
      <section className="primeply__about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-9 sm-w-100">
              <div className="about__content" data-aos="fade-up">
                <h4>Primeply is one of the most trusted names in South India for authentic timber-based plywood since 1986, from the house of Primeply Industries Ltd which also produces Wuudply.</h4>
                <Link to='/about'><button className='btn btn-secondary'>Learn More</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="primeply__featured">
        <div className="container">
          <div className="featured__grid" data-aos="fade-in">
            <div className="row align-items-center sm-reverse">
              <div className="col-md-6 ps-0 sm-p-reverse">
                <div className="featured__img">
                  <img src="assets/img/plywood.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured__content" >
                  <h3>Plywood</h3>
                  <h5>Exceptional range of commercial and waterproof plywood.</h5>
                  <Link to='/products'><button className="btn btn-secondary" >Explore Plywood</button></Link>

                </div>
              </div>
            </div>
          </div>
          <div className="featured__grid" data-aos="fade-in">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="featured__content">
                  <h3>Block board</h3>
                  <h5 >IS1659 Block Boards crafted from handpicked seasoned timber.</h5>
                  <Link to='/products' state={{ setTab: "blockBoard" }}> <button className="btn btn-secondary" >Explore Block board</button></Link>

                </div>
              </div>
              <div className="col-md-6 pe-0 sm-p-reverse">
                <div className="featured__img pb-5 pb-sm-2">
                  <img src="assets/img/blockboard.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to='/products'> <button className='btn btn-secondary'>View All Prodcuts</button></Link>

          </div>
        </div>
      </section>
      <div className="primeply__bestselling">
        <div className="imgGrid" style={{backgroundImage:'url(assets/img/bestselling1.jpg)'}}>
          <div className="container">
            <div className="card" data-aos="fade-in">
              <h2>Primeply Flexi</h2>
              <p>Ultra-flexible plywood for curved <br />
                applications, made of thin plies.</p>
              <Link to='/products'> <button className='btn btn-secondary'>Explore Flexi</button></Link>
            </div>
          </div>
        </div>
        <div className="imgGrid" style={{backgroundImage:'url(assets/img/bestselling2.jpg)'}}>
          <div className="container">
            <div className="card" data-aos="fade-in">
              <h2>Primeply Flexi</h2>
              <p>Ultra-flexible plywood for curved <br />
                applications, made of thin plies.</p>
              <Link to='/products'> <button className='btn btn-secondary'>Explore Flexi</button></Link>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
