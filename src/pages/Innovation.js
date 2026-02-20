import React from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'

export default function Innovation() {
    return (
        <div className='innerpage wuudly__innovation'>
            <InnerBanner image={'assets/img/innovation.jpg'} title='Our Innovation ' />
            <div className="container">
                <div className="offset-md-6">
                    <h3 data-aos="fade-up" data-aos-duration="1500">Our innovation ensures <br />
                        superior quality plywood in <br />
                        every aspect.</h3>
                </div>
            </div>
            <div className="banner__innovation" style={{backgroundImage:'url(assets/img/innovation-banner.jpg)'}}>
               <div className="container">
               <div className="offset-md-6 offset-tab-4">
               <h4 data-aos="fade-up" data-aos-duration="1500">primeply represents the flawless synergy between Innovation, quality, aesthetics, and customer-centricity, yielding exceptional products. This esteemed reputation has positioned primeply as the preferred choice among top-tier builders and architects.</h4>
               </div>
               </div>
            </div>
           <section>
           <div className="container">
                <div className="gurjan-plywood">
                <div className="row">
                    <div className="col-md-6">
                        <h5 data-aos="fade-up" data-aos-duration="1500">We’re among the first Indian companies to introduce 100%  Gurjan plywood, imported from our own factory in Myanmar, and among the first to get the IS710 certification.</h5>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/img/innovation-bottom.jpg" alt="" />
                    </div>
                </div>
                </div>
            </div>
           </section>
        </div>
    )
}
