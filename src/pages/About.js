import React from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'

export default function About() {
  return (
    <div className='innerpage wuudly__about'>
      <InnerBanner image={'assets/img/about.jpg'} title='Beyond Limits, Beyond Compare.' />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h4 data-aos="fade-up">Since 1986, Primeply has been a trusted name in South India, delivering premium timber-based plywood under the umbrella of Primeply Industries.</h4>
          </div>
        </div>
        <div className="offset-md-6">
          <h5 data-aos="fade-up" data-aos-duration="1000">Our expertise lies in crafting top-tier Gurjan wood and related products, including plywood, flush doors, block boards, and decorative veneers, ideal for both residential and commercial spaces.</h5>
          <h5 data-aos="fade-up" data-aos-duration="1500">Sourcing our materials meticulously, we prioritize Gurjan wood from Myanmar, leveraging our own factory for direct control over quality and sustainability practices. </h5>
          <h5 data-aos="fade-up" data-aos-duration="2000">Our flagship offering, Platino Club, boasts an exclusive 100% Gurjan composition, both in its core and face layers. This ensures exceptional stability, strength, and protection against warping, setting a new standard of excellence in plywood craftsmanship. As pioneers in India, Primeply Industries Ltd. was the first to introduce plywood with Gurjan core veneers, exemplifying our commitment to setting industry standards through quality and innovation.</h5>
        </div>
        <div className="col-md-12">
          <h2 className='core' data-aos="fade-up">100% Gurjan</h2>
          <h2 className="core pt-0 text-right" data-aos="fade-up">Core Veneers</h2>
        </div>
        <div className="eco__friendly">
        <div className="row align-items-center sm-reverse">
          <div className="col-md-6">
            <div className="eco__content">
              <img src="assets/img/about-1.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="eco__content">
              <div className="eco-responsibility" data-aos="fade-up">
              <h2>Committed to <br />
                eco-responsibility</h2>
              <p>At Primeply, we are dedicated to sourcing wood responsibly from tropical plantations. By ensuring that nearly all the wood entering our factory is utilized in our manufacturing process, we minimize product wastage and reduce harm to our sensitive ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </div>
  )
}
