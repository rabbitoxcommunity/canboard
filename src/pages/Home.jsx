import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Table, Accordion, Form } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom';
import { gsap } from "gsap";
import { Parallax, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import HomeContact from './HomeContact';

export default function PHome() {

  const swiperRef = useRef(null);
  const trustSwiperRef = useRef(null);
  const apartSwiperRef = useRef(null);
  const [apartActiveIndex, setApartActiveIndex] = useState(0);

  const apartData = [
    {
      img: "/assets/img/canboard/slide1.jpg",
      title: "Living Spaces",
      desc: "From kitchens to storage and furniture, Canboard is designed to resist moisture, wear and daily stress inside homes."
    },
    {
      img: "/assets/img/canboard/slide2.jpg",
      title: "Office Spaces",
      desc: "Engineered board designed for workstations, storage, and office furniture that must stay stable and dependable through constant use."
    },
    {
      img: "/assets/img/canboard/slide4.jpg",
      title: "Educational Spaces",
      desc: "Canboard offers durable, low-emission engineered boards for safe, stable, and long-lasting interior applications."
    },
    {
      img: "/assets/img/canboard/slide3.jpg",
      title: "Retail Spaces",
      desc: "Our engineered boards are designed for counters, displays and fixtures that face high traffic, frequent use, and changing layouts."
    }
  ];

  const trustData = [
    {
      img: "/assets/img/canboard/2.png",
      title: `Handles Moisture with Ease`,
      desc: "Absorbs up to 60% less water than standard particle boards, helping maintain strength and stability."
    },
    {
      img: "/assets/img/canboard/3.jpg",
      title: "Built to Hold Its Form",
      desc: "Designed to resist bending and breakage, retaining its shape and strength through everyday use."
    },
    {
      img: "/assets/img/canboard/health.png",
      title: "Health-friendly",
      desc: "BIS Certified with ultra-low formaldehyde emissions, as per E1 standards."
    },
    {
      img: "/assets/img/canboard/finish.png",
      title: "Beautiful Finish",
      desc: "Uniform, well-calibrated surfaces suitable for direct polishing or painting, with minimal surface preparation required."
    }
  ];
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);

  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    // Animate from blurred to clear
    gsap.fromTo(
      headingRef.current,
      { filter: "blur(10px)", opacity: 0 },
      {
        filter: "blur(0px)",
        opacity: 1,
        duration: 3.5,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      descRef.current,
      { filter: "blur(10px)", opacity: 0 },
      {
        filter: "blur(0px)",
        opacity: 1,
        duration: 3.5,
        ease: "power2.out",
      }
    );
  }, []);

  const process = [
    {
      title: "Raw Material Preparation",
      desc: "Wood materials are debarked and processed into chips, flakes, or fibers. The particle geometry is controlled to achieve the required strength and moisture-resistant performance.",
    },
    {
      title: "Drying and Screening",
      desc: "The prepared particles are dried to a controlled moisture level and screened into different sizes. Coarser particles are typically used in the core, while finer particles are used for surface layers.",
    },
    {
      title: "Additive Treatment",
      desc: "The dried particles are treated with moisture-resistant additives such as wax emulsions and specialized bonding agents. These treatments improve water repellency, dimensional stability, and durability under humid conditions.",
    },
    {
      title: "Mat Forming",
      desc: "The treated particles are evenly distributed onto a conveyor system to form a uniform mat. Layered mat structures may be used to optimize mechanical properties and surface quality.",
    },
    {
      title: "Hot Pressing",
      desc: "The mat is consolidated under controlled heat and pressure. This process activates the bonding mechanism and compresses the particles into a dense, stable HMR board.",
    },
    {
      title: "Cooling and Finishing",
      desc: "After pressing, the boards are cooled and trimmed to standard sizes. Additional finishing processes such as sanding or surface treatment may be applied to meet specific quality requirements.",
    },
    {
      title: "Quality Testing",
      desc: "The finished boards undergo rigorous testing to ensure they meet industry standards for moisture resistance, strength, dimensional stability, and surface quality.",
    }
  ]

  const chipboards = [
    {
      img: "/assets/panelex/categories/1.png",
      title: "Wooden"
    },
    {
      img: "/assets/panelex/categories/2.png",
      title: "Marble"
    },
    {
      img: "/assets/panelex/categories/3.png",
      title: "Fabric"
    },
    {
      img: "/assets/panelex/categories/4.png",
      title: "Solid color"
    },
    {
      img: "/assets/panelex/categories/5.png",
      title: "Pastel Color"
    }
  ]
  const thicknessData = [
    { size: "25mm", img: "/assets/img/canboard/thikness/25mm.png" },
    { size: "18mm", img: "/assets/img/canboard/thikness/18mm.png" },
    { size: "17mm", img: "/assets/img/canboard/thikness/17mm.png" },
    { size: "15mm", img: "/assets/img/canboard/thikness/15mm.png" },
    { size: "11mm", img: "/assets/img/canboard/thikness/11mm.png" },
    { size: "9mm", img: "/assets/img/canboard/thikness/9mm.png" },
  ];

  const faqData = [
    {
      question: "What is engineered wood?",
      answer: "Engineered wood, also known as composite wood, man-made wood, or manufactured board, is a range of derivative wood products which are manufactured by binding or fixing the strands, particles, fibers, or veneers or boards of wood, together with adhesives, or other methods of fixation to form composite materials."
    },
    {
      question: "Is engineered wood the same as particle board?",
      answer: "Particle board is one type of engineered wood. Canboard specifically is an advanced High Moisture Resistance (HMR) board, which is a superior category of engineered wood designed for enhanced durability and moisture resistance compared to standard particle boards."
    },
    {
      question: "How is Canboard different from standard particle boards?",
      answer: "Canboard is engineered with advanced HMR technology, offering up to 60% better moisture resistance, higher density, and superior screw-holding capacity. It's built to perform in tough Indian conditions where heat and humidity are prevalent."
    },
    {
      question: "Is engineered wood as strong as plywood?",
      answer: "While plywood and engineered wood have different structural properties, high-quality engineered boards like Canboard offer excellent dimensional stability and uniform strength throughout the board, often surpassing lower-grade plywood in consistency and moisture resistance."
    },
    {
      question: "Can engineered wood be used in kitchens?",
      answer: "Yes, specifically HMR engineered wood like Canboard is ideal for kitchens. Its moisture-resistant properties make it perfect for cabinets, shutters, and carcases that are frequently exposed to steam and humidity."
    },
    {
      question: "Does engineered wood resist moisture?",
      answer: "Standard engineered wood has limited resistance, but Canboard is specifically designed for High Moisture Resistance (HMR). It absorbs significantly less water, preventing swelling and maintaining its structural integrity in damp environments."
    },
    {
      question: "Is engineered wood safe for indoor use?",
      answer: "Yes, Canboard is manufactured following strict safety standards. It is a sustainable choice for indoor furniture, providing a durable and aesthetic solution for living rooms, bedrooms, and workspaces."
    },
    {
      question: "What thickness options are available in engineered boards?",
      answer: "Canboard is available in various thicknesses to suit different applications, including 9mm, 11mm, 15mm, 17mm, 18mm, and 25mm, providing flexibility for everything from wall paneling to heavy-duty furniture."
    }
  ];
  return (
    <>
      {/* <Outlet /> */}
      <section className="p-0 panelex__banner">
        <img src="/assets/img/canboard/banner.jpg" alt="" />
        <div className="banner__content sm-container">
          <h1 ref={headingRef}>Smartest engineered wood <br /> for everyday interiors.</h1>
          <p ref={descRef} data-aos="fade-up">Build to perform through heat, humidity, and everyday moisture in indian conditions.</p>
        </div>
      </section>

      <section className="panelex__categories" data-aos="fade-up">
        <div className="sm-container">
          <div className="col-md-6 col-tab-8">
            <h2 data-aos="fade-in">Why is Canboard the Smart Choice?</h2>
            <p data-aos="fade-in">Canboard is an advanced HMR engineered wood board designed for interiors exposed to moisture, humidity and frequent use. It retains its strength and shape over time, making it suitable for kitchens, workspaces, storage and commercial settings.</p>
            <p data-aos="fade-in">With strong screw-holding capacity and stable core construction, it serves as a smarter alternative to conventional panel-based products such as plywood, MDF and PVC boards.</p>
          </div>

        </div>
      </section>

      <section className="panelex__trust" data-aos="fade-up">
        <div className="container-fluid pe-0">
          <div className="sm-container d-flex justify-content-between align-items-end mb-5 header-row">
            <h2 data-aos="fade-in">Why People Trust <br /> Canboard?</h2>
            <div className="navigation d-flex gap-3">
              <div
                className="nav-btn prev-btn"
                onClick={() => trustSwiperRef.current?.slidePrev()}
              >
                <img
                  src="/assets/img/products/arrow.svg"
                  alt="Previous"
                  style={{ transform: 'rotate(180deg)' }}
                />
              </div>
              <div
                className="nav-btn next-btn"
                onClick={() => trustSwiperRef.current?.slideNext()}
              >
                <img
                  src="/assets/img/products/arrow.svg"
                  alt="Next"
                />
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1.2}
            onSwiper={(swiper) => (trustSwiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 1.3,
              },
            }}
            className="trustSwiper ml-5 ms-1 ms-md-5"
          >
            {trustData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="trust-card d-flex">
                  <div className="image-wrapper">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="content-wrapper">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="panelex__offerings" data-aos="fade-up">
        <div className="sm-container">
          <h2 data-aos="fade-in">Canboard Offerings</h2>
        </div>
        <div className="container-fluid">
          <div className="mx-2 mx-md-5">
            <div className="row offerings-grid">
              <div className="col-md-6 mb-4">
                <div className="offering-card" data-aos="fade-up">
                  <div className="card-top">
                    <h3>Europa</h3>
                    <p>Laminated HMR boards with high-quality <br /> European décor papers.</p>
                    <Link to="/panelex/products/europa" className="btn-explore">Explore Europa</Link>
                  </div>
                  <div className="card-img">
                    <img src="/assets/img/canboard/4.png" alt="Europa" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="offering-card" data-aos="fade-up" data-aos-delay="150">
                  <div className="card-top">
                    <h3>Indus</h3>
                    <p>Laminated HMR boards with premium, <br /> high-quality décor papers.</p>
                    <Link to="/panelex/products/indus" className="btn-explore">Explore Indus</Link>
                  </div>
                  <div className="card-img">
                    <img src="/assets/img/canboard/4.png" alt="Indus" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="panelex__apart pt-0" data-aos="fade-up">
        <div className="sm-container mb-5">
          <div className="col-md-6 col-tab-8">
            <h2 data-aos="fade-in">What truly <br /> sets it apart?</h2>
            <p data-aos="fade-in">Made from 100% natural wood chips, Canboard is built around a dense, uniform core designed for long-term stability. With higher density than conventional plywood and up to 60% better moisture resistance than standard particle boards, it delivers strong screw-holding performance and reliable durability in everyday interiors.</p>
          </div>
        </div>

        <div className="apart__slider_wrapper">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            effect={'fade'}
            parallax={true}
            speed={1200}
            modules={[Parallax, EffectFade]}
            onSlideChange={(swiper) => setApartActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (apartSwiperRef.current = swiper)}
            className="apartSwiper"
          >
            {apartData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="apart-slide"
                  style={{ backgroundImage: `url(${item.img})` }}
                  data-swiper-parallax="-30%"
                  data-swiper-parallax-opacity="0"
                >
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="info-box-fixed">
            <div className="info-content" key={apartActiveIndex}>
              <h3>{apartData[apartActiveIndex].title}</h3>
              <p>{apartData[apartActiveIndex].desc}</p>
            </div>
            <div className="navigation">
              <div
                className="nav-btn prev-btn"
                onClick={() => apartSwiperRef.current?.slidePrev()}
              >
                <img
                  src="/assets/img/products/arrow.svg"
                  alt="Previous"
                  style={{ transform: 'rotate(180deg)', width: '35px' }}
                />
              </div>
              <div
                className="nav-btn next-btn"
                onClick={() => apartSwiperRef.current?.slideNext()}
              >
                <img
                  src="/assets/img/products/arrow.svg"
                  alt="Next"
                  style={{ width: '35px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="panelex__apart" data-aos="fade-up" style={{ backgroundColor: '#F3F0F0', paddingBottom: '100px' }}>
        <div className="sm-container">
          <div className="col-md-8 col-tab-12">
            <h2 data-aos="fade-in">40 Years of Engineering <br /> Excellence</h2>
            <p data-aos="fade-in" className='mb-0'>We’ve been producing wood panels for over 40 years—driven by innovation and responsible manufacturing.</p>
            <Link to="/panelex/about" className="btn-view mt-5">About Canboard</Link>
          </div>
        </div>
      </section>



      <section className="panelex__thickness position-relative" data-aos="fade-up">
        <div className="sm-container">
          <div className="thickness__header">
            <h2>Multiple thicknesses. <br /> same strength.</h2>
            <div className="sub_title">
              <div className="row">
                <div className="col-md-5">
                  <h4>Standard Board Size</h4>
                </div>
                <div className="col-md-7 sm-position">
                  <h4>Available Thickness Options</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0" style={{ overflow: 'hidden' }}>
          <div className="thickness__content">
            <div className="sm-container">
              <div className="row">
                <div className="col-md-5 thickness__left">
                  <div className="board-visual">
                    <div className="board-img-wrapper">
                      <img src="/assets/img/canboard/thikness/core.png" alt="Core Board" />
                      <div className="marker horizontal">
                        <span>4</span>
                      </div>
                      <div className="marker vertical">
                        <span>8</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-7 thickness__right">
                  <div className="thickness__list">
                    {thicknessData.map((item, index) => (
                      <div className="thickness__item" key={index}>
                        <div className="img-box">
                          <img src={item.img} alt={item.size} />
                        </div>
                        <div className="label-box">
                          <span>{item.size}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="panelex__manifature" style={{ backgroundImage: 'url(assets/img/canboard/process.svg)', backgroundColor: '#F3F0F0' }}>
        <div className="sm-container">
          <div className="row">
            <div className="col-md-6">
              <h2 data-aos="fade-in">Manufacturing <br />
                process:</h2>
              <Swiper
                spaceBetween={30}
                // autoHeight={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                effect={'fade'}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade]}
                className="mySwiper"
              >
                {
                  process?.map((ele, i) => {
                    return (
                      <SwiperSlide>
                        <div className="infoGrid" data-aos="fade-in" key={i}>
                          <div className="count">{i + 1}</div>
                          <h4>{ele?.title}</h4>
                          <p>{ele?.desc}</p>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }

              </Swiper>
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
        </div>
      </section>


      <section className="panelex__faq" data-aos="fade-up">
        <div className="container-fluid">
          <div className="row  mx-2 mx-md-5">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2>Frequently Asked <br /> Questions</h2>
              <p>Still have a question in mind? Contact us</p>
            </div>
            <div className="col-md-6">
              {/* defaultActiveKey="0" */}
              <Accordion flush className="faq-accordion">
                {faqData.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="panelex__performance pt-0" data-aos="fade-up">
        <div className="container-fluid">
          <div className="mx-4">
            <div className="performance-card" style={{ backgroundImage: 'url(/assets/img/canboard/can-bg.jpg)' }}>
              <div className="row h-100 align-items-center">
                <div className="col-lg-8 col-md-8 content-side">
                  <h2 data-aos="fade-in">Engineered for everyday performance</h2>
                  <p data-aos="fade-in">Engineered for long-lasting strength, our engineered wood combine moisture resistance, durability, and superior screw-holding for reliable everyday performance.</p>
                  <Link to="/brochure.pdf" className="btn-view" target="_blank">Download Brochure</Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="panelex__help" data-aos="fade-up">
        <div className="container-fluid">
          <div className="row justify-content-between mx-4">
            <div className="col-lg-6 mb-5 mb-lg-0 line-h">
              <h2 data-aos="fade-in">Need help choosing <br /> the right board?</h2>
              <p data-aos="fade-in">Share your requirement and we’ll help you find <br /> the right solution</p>
            </div>
            <div className="col-lg-6">
              <HomeContact />
            </div>
          </div>
        </div>
      </section>

    </>

  )
}
