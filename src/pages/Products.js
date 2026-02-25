import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import AOS from 'aos';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const productData = {
    europa: {
        title: 'Europa',
        description: 'Engineered boards finished with premium European décor papers.',
        longDesc: 'EUROPA is an engineered wood built on a Canboard’s, high moisture resistant core and finished with premium European décor papers. Designed for consistency in appearance and performance, it delivers refined surface quality and long-term reliability across interior applications where detail and finish matter.',
        image: '/assets/img/canboard/europa.png'
    },
    indus: {
        title: 'Indus',
        description: 'Engineered boards finished with premium, high-quality décor papers.',
        longDesc: 'INDUS is an engineered wood built on a Canboard’s, high moisture resistant core and finished with premium, high-quality décor papers. Designed for consistency in appearance and performance, it delivers refined surface quality and long-term reliability across interior applications where detail and finish matter.',
        image: '/assets/img/canboard/indus.png'
    }
};

const features = [
    {
        icon: '/assets/img/canboard/icons/1.svg',
        title: 'Fire Retardant',
        desc: 'Designed to slow the spread of fire, supporting safer interior environments.'
    },
    {
        icon: '/assets/img/canboard/icons/2.svg',
        title: 'Water Resistant',
        desc: 'Handles everyday moisture exposure without compromising stability.'
    },
    {
        icon: '/assets/img/canboard/icons/3.svg',
        title: 'Superior Strength',
        desc: 'Reliable load-bearing and secure screw-holding performance.'
    },
    {
        icon: '/assets/img/canboard/icons/4.svg',
        title: 'Borer Resistant',
        desc: 'Built to resist termite and borer damage for long-lasting interior use.'
    },
    {
        icon: '/assets/img/canboard/icons/5.svg',
        title: 'Eco Friendly',
        desc: 'Manufactured with low-emission materials to support healthier indoor air quality.'
    },
    {
        icon: '/assets/img/canboard/icons/6.svg',
        title: 'Smooth Finish',
        desc: 'Uniform surface quality designed for clean lamination and consistent appearance.'
    }
];

const trustData = [
    {
        img: "/assets/img/canboard/product-slide1.png",
        title: `Living Spaces`,
        desc: "Designed for furniture, storage and cabinetry where surface finish and everyday durability matter."
    },
    {
        img: "/assets/img/canboard/product-slide2.png",
        title: "Office Spaces",
        desc: "Suitable for workstations, storage units, and furniture that demand structural stability under frequent use."
    },
    {
        img: "/assets/img/canboard/product-slide4.png",
        title: "Educational Spaces",
        desc: "Well suited for interiors where safety, durability, and low-emission materials are essential."
    },
    {
        img: "/assets/img/canboard/product-slide3.jpg",
        title: "Retail Spaces",
        desc: "Ideal for displays, counters, and fixtures that require  consistency, strength, and long-term wear resistance."
    }
];

export default function Products() {
    const { id } = useParams();
    const trustSwiperRef = useRef(null);
    const product = productData[id] || productData.europa;

    useEffect(() => {
        AOS.init({ duration: 2000 });
        window.scrollTo(0, 0);
    }, [id]);


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className='canboard__products'>
            <section className="product__banner">
                <div className="sm-container">
                    <div className="banner__text">
                        <h1 data-aos="fade-up">{product.title}</h1>
                        <p data-aos="fade-up" data-aos-delay="100">{product.description}</p>
                    </div>
                </div>
                <div className="banner__image">
                    <img src={product.image} alt={product.title} className="w-100" data-aos="zoom-in" />
                </div>
            </section>

            <section className="product__description__section">
                <div className="sm-container">
                    <div className="row">
                        <div className="col-lg-9 mb-5">
                            <p className="long-desc" data-aos="fade-up">{product.longDesc}</p>
                        </div>
                    </div>
                    <div className="row section-header">
                        <div className="col-lg-8">
                            <h2 data-aos="fade-up">Engineered for <br /> Everyday Use</h2>
                            <p data-aos="fade-up" data-aos-delay="100">Built to remain stable, reliable, and consistent <br /> through daily interior use.</p>
                        </div>
                    </div>
                </div>
                <div className="features-grid">
                    <div className="row g-0">
                        {features.map((feature, index) => (
                            <div className="col-md-4 feature-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="feature-content">
                                    <div className="icon-wrapper">
                                        <img src={feature.icon} alt={feature.title} />
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="panelex__trust" data-aos="fade-up">
                <div className="container-fluid pe-0">
                    <div className="sm-container d-flex justify-content-between align-items-end mb-5 header-row">
                        <h2 data-aos="fade-in">Built to Last Across <br /> Interior Spaces</h2>
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
                        spaceBetween={isMobile ? 0 : 30}
                        // slidesPerView={1.2}
                        onSwiper={(swiper) => (trustSwiperRef.current = swiper)}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1.5,
                            },
                            1024: {
                                slidesPerView: 1.3,
                            },
                        }}
                        className="trustSwiper ms-md-5"
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
            <section className="panelex__help-cta" data-aos="fade-up">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <h2>Need help choosing <br /> the right board?</h2>
                            <p>Share your requirement and we’ll help you find <br /> the right solution</p>
                            <a href="/contact" className="btn-touch">Get in Touch</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
