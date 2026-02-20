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
        <div className="banner__content">
          <h1 ref={headingRef}>Smartest engineered wood <br /> for everyday interiors.</h1>
          <p data-aos="fade-up">Build to perform through heat, humidity, and <br />everyday moisture in indian conditions.</p>
        </div>
      </section>

      <section className="panelex__categories" data-aos="fade-up">
        <div className="container">
          <div className="col-md-6">
            <h2 data-aos="fade-in">Why is Canboard the Smart Choice?</h2>
            <p data-aos="fade-in">Canboard is an advanced HMR engineered wood board designed for interiors exposed to moisture, humidity and frequent use. It retains its strength and shape over time, making it suitable for kitchens, workspaces, storage and commercial settings.</p>
            <p data-aos="fade-in">With strong screw-holding capacity and stable core construction, it serves as a smarter alternative to conventional panel-based products such as plywood, MDF and PVC boards.</p>
          </div>

        </div>
      </section>
      <section className="panelex__future">
        <img src="/assets/panelex/future.png" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="grid">
                <h2 data-aos="fade-up">This is what the<br />
                  future looks like</h2>
                <p data-aos="fade-up">Made from sustainably sourced wood fibers and recycled materials, our pre-laminated boards help reduce waste and environmental impact—without compromising on quality or aesthetics. Every panel is a step toward smarter spaces and a cleaner planet—because the future of design should be as sustainable as it is beautiful.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="grid end">
                <Link to={'/panelex/mission'}><button className='btn btn-white' data-aos="fade-in">Find out how we do it</button></Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panelex__teak">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link to='/panelex/products'>
                <div className="grid" data-aos="fade-up" data-aos-duration="1000">
                  <img src="https://ik.imagekit.io/brunchnasser/Elite/PP1135%20Coach%20Wood%20Medium.png?updatedAt=1749487328733" alt="" />
                  <h4>PP1135</h4>
                  <p>Coach Wood Medium</p>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to='/panelex/products'>
                <div className="grid" data-aos="fade-up" data-aos-duration="2000">
                  <img src="https://ik.imagekit.io/brunchnasser/Earth/PP1102%20Earth%20Series%20Supreme.png?updatedAt=1749488911980" alt="" />
                  <h4>PP1102</h4>
                  <p>Earth Series Supreme</p>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to='/panelex/products'>
                <div className="grid" data-aos="fade-up" data-aos-duration="3000">
                  <img src="/assets/panelex/Thai Teak1.png" alt="" />
                  <h4>731 - Wenge</h4>
                  <p>Suede (SUD)</p>
                </div>
              </Link>
            </div>
            <div className="col-md-12 text-center" data-aos="fade-in" data-aos-duration="3000">
              <Link to='/panelex/products'> <button className="btn btn-secondary">View All</button></Link>
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
