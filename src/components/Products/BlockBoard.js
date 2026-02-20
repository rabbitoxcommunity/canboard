import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Table } from 'react-bootstrap'
import Subtitle from './Subtitle';
import Aos from 'aos';
function BlockBoard() {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(false);
  const plyWoodData = [
    {
      top_title: 'PRIME BOARD',
      image: 'assets/img/wuudboard.jpg',
      title: '(IS1659)',
      // sub_title: '15 YEARS GUARANTEE',
      desc: 'Wuudboard: crafted from premium timber, seasoned for uniform moisture, and sterilized to eliminate wood-destroying organisms. Rigorous quality checks ensure smooth, uniform block boards, perfect for easy lamination without deformation.',
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.72 to 0.80 g/cc</td>
            <td>Glue Shear </td>
            <td>135</td>
          </tr>
          <tr>
            <td>Moisture Content </td>
            <td>8 - 12%</td>
            <td>Bending Strength</td>
            <td>0</td>
          </tr>
          <tr>
            <td>-- MOR</td>
            <td>50</td>
            <td>-- MOE</td>
            <td>5500</td>
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
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  return (
    <div className='product__items'>
      <Swiper
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

                  <div className="row sm-reverse" data-aos="fade-in">
                    <div className="col-md-6">
                      <div className="product__image">
                        <img src={ele.image} className='w-100' alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product__details pt-5">
                        <h2>{ele.title}</h2>
                        {/* <Subtitle title={ele.sub_title} /> */}
                        <h5 className='pb-0'>{ele.desc}</h5>
                        <h5>Species: Teak, Wenge, Sapele, Red Oak, Walnut</h5>
                        <h6>{ele.table_title}</h6>
                        {ele.table}

                      </div>
                    </div>
                  </div>

                    <div className="row">
                    <div className="col-md-6">
                      <div className="wuudboard">
                        <h3>01 Exploded View <br />
                           02 Timber Strips Core <br />
                           03 Veneer</h3>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="wuudboard">
                        <img src="assets/img/wuudboard.png" className='w-100' alt="" />
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

export default BlockBoard