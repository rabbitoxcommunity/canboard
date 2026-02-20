import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Aos from 'aos';

export default function PAbout() {
  const swiperRef = useRef(null);
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="panelex__about">
        <div className="container">
          <h1 data-aos="fade-up" data-aos-duration="3000">Embrace your space with durable chipboard</h1>
        </div>
      </section>
      <img src="/assets/panelex/about.png" className='w-100' alt="" />
      <section className="about__desc">
        <div className="container">
          <div className="col-md-6">
            <h2 data-aos="fade-up" data-aos-duration="2000">Reducing material wastage
              with sustainable prelaminated
              solutions.</h2>
          </div>
        </div>
        <div className="container">
          <div className="offset-md-6 col-md-6">
            <div className="p-50" data-aos="fade-up" data-aos-duration="3000">
              <p>We’re a chipboard brand from South India, built on years of experience and a strong belief in quality, innovation, and sustainability.</p>
              <p>Panelex comes from the house of Wuudply and is backed by Primeply Industries—one of South India’s most trusted names in plywood since the 1980s.</p>
              <p>We make pre-laminated boards designed for modern spaces. Our products combine aesthetic, strength, and reliability. With smart manufacturing and eco-friendly practices, we make sure every board performs well and lasts long.</p>
              <p>Whether it’s for furniture, wall paneling, or interiors, our boards fit right into homes, offices, and public spaces.</p>
            </div>

          </div>
        </div>
      </section>
      <section className="panelex__history">
        <div className="container">
          <div className="col-md-6 col-tab-9">
            <h2 data-aos="fade-up" data-aos-duration="3000">40 years of history made us who
              we are today: proud of our roots,
              and ready for what’s next.</h2>
          </div>
          <div className="col-md-12">
            <div className="story__slider">
              <Swiper
                spaceBetween={30}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="mySwiper"
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="Grid">
                    <h4>1960</h4>
                    <p>Timber Trading by C. Mammu</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>1980</h4>
                    <p>Saw Mill</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>1986</h4>
                    <p>Plywood & Veneering Unit</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>1990</h4>
                    <p>Resin Plant</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>2000</h4>
                    <p>Hospitality: <br />Malabar Residency</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>2001</h4>
                    <p>Second Plywood Facility</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>2004</h4>
                    <p>Veneering Factory at Myanmar</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>2010</h4>
                    <p>Third Plywood Facility</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>2010</h4>
                    <p>Real Estate: <br /> Woodshade Builders</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="Grid">
                    <h4>2024</h4>
                    <p>Particle Board Unit</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="navigation">
              <img
                src="/assets/img/products/arrow.svg"
                alt="Previous"
                style={{ rotate: '180deg' }}
                className="absolute top-1/2 left-2 z-10 cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              />
              <img
                src="/assets/img/products/arrow.svg"
                alt="Next"
                className="absolute top-1/2 right-2 z-10 cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
