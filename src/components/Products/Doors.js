import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Table } from 'react-bootstrap'
import Subtitle from './Subtitle';
import Aos from 'aos';

export default function Doors() {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const plyWoodData = [
    {
      top_title: 'FLUSH DOORS',
      image: 'assets/img/products/doors/1.jpg',
      title: '(IS2202)',
      // sub_title: 'LIFETIME GUARANTEE',
      desc: 'Total Vacuum Pressure Treatment (VPT) for entire frame and core Guaranteed complete protection from borer and fungus attacks Innovative and Sophisticated Flush Doors as per customer requirements Mica or Paint finish can be added.',
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.72 to 0.80 g/cc</td>
            <td>Moisture Content  </td>
            <td>8 - 12%</td>
          </tr>
          <tr>
            <td>Knife Test</td>
            <td>Excellent</td>
            <td>Water Resistance</td>
            <td>Excellent</td>
          </tr>
        </tbody>
      </Table>
    },
    {
      top_title: 'PANEL (SKIN) DOORS',
      image: 'assets/img/products/doors/2.jpg',
      title: 'Range Of Moulded Panelled Doors',
      // sub_title: 'LIFETIME GUARANTEE',
      desc: 'Made from imported high-density fiber skins in collaboration with world-leading door-skin manufacturers. Access the full original collection with various styles, finishes, and textures. Offers exceptional durability, superior finish, and resistance to stains and scratches.',
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.72 to 0.80 g/cc</td>
            <td>Moisture Content  </td>
            <td>8 - 12%</td>
          </tr>
          <tr>
            <td>Knife Test</td>
            <td>Excellent</td>
            <td>Water Resistance</td>
            <td>Excellent</td>
          </tr>
        </tbody>
      </Table>
    }

    
  ]

  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
      if(currentIndex > 0){
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
      if(currentIndex < plyWoodData.length -1){
        setCurrentIndex(currentIndex + 1);
      }
     
    }
  };
  return (
    <div className='product__items'>
      <div className="navigation">
      <button className={`arrow-btn ${currentIndex === 0 ? 'disabled' : ''}`} onClick={goPrev}><img src="assets/img/products/arrow.svg" style={{rotate:'180deg'}} alt="" /></button>
        <button className={`arrow-btn ${currentIndex === plyWoodData.length -1 ? 'disabled' : ''}`} onClick={goNext}><img src="assets/img/products/arrow.svg" alt="" /></button>
      </div>
      <Swiper
      autoHeight={true}
        onSwiper={(s) => {
          setSwiper(s);
        }}
      >

        {
          plyWoodData?.map((ele, i) => {
            return (
              <SwiperSlide key={i} >
                <>
                <div className="col-md-12">
                    <div className="product__header">
                      <div className="product__logo">
                        <img src="assets/img/logo.svg" alt="" />
                        <h2>{ele.top_title}</h2>
                      </div>

                    </div>
                  </div>
                  <div className="row align-items-center sm-reverse" data-aos="fade-in">
                  <div className="col-md-6">
                    <div className="product__image">
                      <img src={ele.image} className='w-100' alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product__details">
                      <h2>{ele.title}</h2>
                      {/* <Subtitle title={ele.sub_title} /> */}
                      <h5>{ele.desc}</h5>
                      <h6>{ele.table_title}</h6>
                      {ele.table}

                    </div>
                  </div>
                </div>
                </>

              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}
