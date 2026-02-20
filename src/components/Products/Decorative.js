import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Table } from 'react-bootstrap'
import Subtitle from './Subtitle';
import Aos from 'aos';
export default function Decorative() {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(false);
  const plyWoodData = [
    {
      top_title: 'PRIME VENEERS',
      image: 'assets/img/kraft.jpg',
      title: 'Decorative veneers',
      // sub_title: '15 YEARS GUARANTEE',
      desc: 'One of the founding product, primeply Kraft Decorative Veneers, tailored to customer preferences at competitive prices. Ideal for pasting onto plywood/boards for a natural wood finish or polishing for a luxurious look. Continuously evolving to meet market demands, inquire about our latest offerings.',
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
          <td>7500</td>
        </tr>
        <tr>
          <td>Knife Test</td>
          <td>Excellent</td>
          <td>Water Resistance</td>
          <td>Excellent (72Hrs)</td>
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
                </>
               
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}
