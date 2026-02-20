import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Table } from 'react-bootstrap'
import Subtitle from './Subtitle';
import Aos from 'aos';

export default function Plywood() {
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const plyWoodData = [
    {
      top_title: '101',
      image: 'assets/img/products/plywood/1.jpg',
      title: 'Fire Retardant (IS5509) & Marine Grade (IS710)',
      sub_title: '15 YEARS GUARANTEE',
      desc: 'Fire and Water resistant Made of tropical hardwood Best for kitchens and bathrooms',
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.72 to 0.80g/cc</td>
            <td>Glue Shear </td>
            <td>135</td>
          </tr>
          <tr>
            <td>Moisture Content </td>
            <td>8 - 12%</td>
            <td>Bending Strength</td>
            <td>1</td>
          </tr>
          <tr>
            <td>-- MOR</td>
            <td>40</td>
            <td>-- MOE</td>
            <td>9000</td>
          </tr>
          <tr>
            <td>Knife Test</td>
            <td>Excellent</td>
            <td>Water Resistance</td>
            <td>Excellent (72Hrs)</td>
          </tr>
        </tbody>
      </Table>
    },
    {
      top_title: 'PLATINO CLUB',
      image: 'assets/img/products/plywood/2.jpg',
      title: 'Marine Grade (IS710)',
      sub_title: 'LIFETIME GUARANTEE',
      desc: 'Made of 100% Gurjan core veneer bonded with Phenolic Resin for superior strength and density. Naturally resistant Gurjan wood ideal for industrial and kitchen applications',
      shortdesc : "All are calibrated to perfect and accurate thickness",
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.72 to 0.80g/cc</td>
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
            <td>9000</td>
          </tr>
          <tr>
            <td>Knife Test</td>
            <td>Excellent</td>
            <td>Water Resistance</td>
            <td>Excellent (72Hrs)</td>
          </tr>
        </tbody>
      </Table>
    },
    {
      top_title: 'GOLD',
      image: 'assets/img/products/plywood/3.jpg',
      title: 'Marine Grade (IS710)',
      sub_title: '30 YEARS GUARANTEE',
      desc: 'Made of Gurjan and tropical hardwood Bonded with Phenolic Resin 100% Borer-proof Best for industrial and kitchens applications',
      shortdesc : "All are calibrated to perfect and accurate thickness",
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.72 to 0.80g/cc</td>
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
            <td>8000</td>
          </tr>
          <tr>
            <td>Knife Test</td>
            <td>Excellent</td>
            <td>Water Resistance</td>
            <td>Excellent (72Hrs)</td>
          </tr>
        </tbody>
      </Table>
    },
    {
      top_title: 'HD',
      image: 'assets/img/products/plywood/4.jpg',
      title: 'Marine Grade (IS710)',
      sub_title: '20 YEARS GUARANTEE',
      desc: 'Nilgiri Eucalyptus core veneers Bonded with phenolic formaldehyde resin Withstands wet conditions and temperature variations. Also available in commercial UF resin',
      shortdesc : "All are calibrated to perfect and accurate thickness",
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.72 to 0.80g/cc</td>
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
    },
    // {
    //   top_title: 'CALIBER',
    //   image: 'assets/img/products/plywood/5.jpg',
    //   title: 'Precision Plywood (IS710)',
    //   sub_title: '15 YEARS GUARANTEE',
    //   desc: 'For super-smooth surfaces in offices and kitchens Nilgiri Eucalyptus + treated Hardwood core Resistant to borer & fungal attacks Phenolic Resin Bonded & resistant to moisture (Also available in IS303)',
    //   table_title: 'Technical Specification',
    //   table: <Table hover>
    //     <tbody>
    //       <tr>
    //         <td>Density</td>
    //         <td>0.72 to 0.80g/cc</td>
    //         <td>Glue Shear </td>
    //         <td>135</td>
    //       </tr>
    //       <tr>
    //         <td>Moisture Content </td>
    //         <td>8 - 12%</td>
    //         <td>Bending Strength</td>
    //         <td>0</td>
    //       </tr>
    //       <tr>
    //         <td>-- MOR</td>
    //         <td>50</td>
    //         <td>-- MOE</td>
    //         <td>7500</td>
    //       </tr>
    //       <tr>
    //         <td>Knife Test</td>
    //         <td>Excellent</td>
    //         <td>Water Resistance</td>
    //         <td>Excellent (72Hrs)</td>
    //       </tr>
    //     </tbody>
    //   </Table>
    // },
    {
      top_title: 'STEEL',
      image: 'assets/img/products/plywood/6.jpg',
      title: 'Shuttering Plywood (IS4990)',
      // sub_title: '15 YEARS GUARANTEE',
      desc: 'Naturally durable cross-band veneers Bonded with Phenolic resin Face veneer topped with phenolic resin film Best for construction and industry.',
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0 .95 -1g/cc</td>
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
    },
    {
      top_title: 'DIAMOND',
      image: 'assets/img/products/plywood/7.png',
      title: 'Chequered Ply (IS3513)',
      // sub_title: '15 YEARS GUARANTEE',
      desc: 'Chequered, anti-skid plywood Bonded with phenolic resin Best suited for vehicle flooring, containers and industrial flooring. 100% water proof highly durable shutters',
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.80 - 0.90g/cc</td>
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
    },
    {
      top_title: 'ECO',
      image: 'assets/img/products/plywood/8.jpg',
      title: 'Commercial Grade (IS303)',
      // sub_title: 'LIFETIME GUARANTEE',
      desc: 'Made of select hardwood Available in water proof, water resistant & commercial UF resin',
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
            <td>1</td>
          </tr>
          <tr>
            <td>-- MOR</td>
            <td>40</td>
            <td>-- MOE</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>Knife Test</td>
            <td>Excellent</td>
            <td>Water Resistance</td>
            <td>Excellent (72Hrs)</td>
          </tr>
        </tbody>
      </Table>
    },
    {
      top_title: 'FLUBBER',
      image: 'assets/img/products/plywood/9.jpg',
      title: 'Perfect Shape to Your Designs',
      // sub_title: 'LIFETIME GUARANTEE',
      desc: 'Specially engineered for flexibility Best for cabins, hemispherical shapes, panels and pillars No special equipment required',
      table_title: 'Technical Specification',
      table: <Table hover>
        <tbody>
          <tr>
            <td>Density</td>
            <td>0.70- 0.80g/cc</td>
            <td>Glue Shear </td>
            <td>135</td>
          </tr>
          <tr>
            <td>Moisture Content </td>
            <td>8 - 12%</td>
            <td>Bending Strength</td>
            <td>1</td>
          </tr>
          <tr>
            <td>-- MOR</td>
            <td>50</td>
            <td>-- MOE</td>
            <td>5000</td>
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
                  <div className="row align-items-center sm-reverse" data-aos="fade-up">
                  <div className="col-md-6">
                    <div className="product__image">
                      <img src={ele.image} className='w-100' alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product__details">
                      <h2>{ele.title}</h2>
                      {
                        ele.sub_title &&  <Subtitle title={ele.sub_title} />
                      }
                     
                      <h5>{ele.desc}</h5>
                      {ele.shortdesc && <h5 className='pt-0'>{ele.shortdesc}</h5>}
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
