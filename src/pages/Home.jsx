import Aos from 'aos';
import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Table } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom';
import { gsap } from "gsap";
import { Parallax, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function PHome() {

  const swiperRef = useRef(null);
  const trustSwiperRef = useRef(null);

  const trustData = [
    {
      img: "/assets/img/canboard/2.png",
      title: `Handles Moisture with Ease`,
      desc: "Absorbs up to 60% less water than standard particle boards, helping maintain strength and stability."
    },
    {
      img: "/assets/img/canboard/3.jpg",
      title: "Handles Moisture with Ease",
      desc: "Absorbs up to 60% less water than standard particle boards, helping maintain strength and stability."
    },
    {
      img: "/assets/img/canboard/3.jpg",
      title: "Handles Moisture with Ease",
      desc: "Absorbs up to 60% less water than standard particle boards, helping maintain strength and stability."
    }
  ];
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);

  const headingRef = useRef(null);

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
  }, []);

  const process = [
    {
      title: "Raw Material Preparation",
      desc: "Logs are debarked and chipped into smaller pieces, then further processed into flakes or strands. The size of the chips influences the final flake length, which impacts the board's properties.",
    },
    {
      title: "Drying and Screening",
      desc: "Flakes are dried to a specific moisture content (typically 2-3%). They are then screened to separate different sizes, with coarser particles often directed to the core and finer particles to the surface layers.",
    },
    {
      title: "Resin and Additive Mixing",
      desc: "A resin (like urea-formaldehyde) and other additives (wax, dyes, etc.) are added to the flakes. The resin coats the particles and aids in bonding them together during the pressing stage.",
    },
    {
      title: "Mat Forming",
      desc: "The resin-coated flakes are spread evenly onto a conveyor belt, forming a mat. In graded-density particleboard, air jets may be used to separate particles by size and create a layered structure.",
    },
    {
      title: "Hot Pressing",
      desc: "The mat is placed in a hot press, where it's compressed under high pressure and temperature (e.g., 180-200°C). The heat and pressure cure the resin, bonding the particles together into a solid board.",
    },
    {
      title: "Cooling and Finishing",
      desc: "After pressing, the boards are cooled to prevent sticking. They are then trimmed, sanded, and may be finished with a veneer or laminate surface for improved aesthetics.",
    },
    {
      title: "Additional Considerations",
      desc: "The pressing cycle duration and temperature depend on the desired board thickness and density. Particleboard can be made from various materials, including wood chips, bagasse, and other agricultural residues.",
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
  return (
    <>
      {/* <Outlet /> */}
      <section className="p-0 panelex__banner">
        <img src="/assets/panelex/banner.jpg" alt="" />
        <div className="banner__content sm-container">
          <h1 ref={headingRef}>Smartest engineered wood <br /> for everyday interiors.</h1>
          <p data-aos="fade-up">Build to perform through heat, humidity, and <br />everyday moisture in indian conditions.</p>
        </div>
      </section>

      <section className="panelex__categories" data-aos="fade-up">
        <div className="sm-container">
          <div className="col-md-6">
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
            className="trustSwiper ml-5 ms-5"
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
          <div className="mx-5">
            <div className="row offerings-grid">
              <div className="col-md-6 mb-4">
                <div className="offering-card" data-aos="fade-up">
                  <div className="card-top">
                    <h3>Europa</h3>
                    <p>Laminated HMR boards with high-quality <br /> European décor papers.</p>
                    <Link to="/panelex/products" className="btn-explore">Explore Europa</Link>
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
                    <Link to="/panelex/products" className="btn-explore">Explore Indus</Link>
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



      <section className="panelex__manifature" style={{ backgroundImage: 'url(assets/panelex/process.png)' }}>
        <div className="container">
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

      <section className="panelex__excellence">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="content text" data-aos="fade-up">
                <h2>40 Years of Engineering Excellence</h2>
                <p>We’ve been producing engineered wood boards for more than 40 years—with passion, innovation, and a strong commitment to sustainability.</p>
                <Link to='/panelex/about'><button className="btn btn-secondary">Dicover who we are</button></Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <img src="/assets/panelex/excellence.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
