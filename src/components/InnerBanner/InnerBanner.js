import React, { useEffect } from 'react'
import './InnerBanner.scss'
import Aos from 'aos';
export default function InnerBanner({ image, title }) {
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='wuudly__innerBanner' style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <h1 data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-duration="1000"
          >{title}</h1>
      </div>
    </div>
  )
}
