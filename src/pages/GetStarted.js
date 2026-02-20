import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function GetStarted() {
    const [swiper, setSwiper] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(function () {
        Aos.init({ duration: 2000 });
    }, []);

    const plyWoodData = [
        {
            image: 'assets/img/wuudply.svg',
            width:'80%',
            url :'https://wuudply.in/'
        },
        {
            image: 'assets/img/logo.svg',
            width:'60%',
            url :'/home'
        },
         {
            image: 'assets/panelex/logo.svg',
            width:'80%',
            url :'/panelex'
        },
    ]
    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        }
    };

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
            if (currentIndex < plyWoodData.length -1) {
                console.log('next')
                setCurrentIndex(currentIndex + 1);
            }else{
                console.log('over')
            }

        }
    };

    const d = new Date();
    let year = d.getFullYear();
    return (
        console.log(currentIndex,'currentIndex'),
        <>
            <section className="getStarted">
                <div className="container">
                    <div className="header" data-aos="fade-in">
                        <img src="assets/img/PrimeplyIndustries.svg" alt="" />
                    </div>
                    <div className="main__banner">
                        <h1 data-aos="fade-up">Better Materials.<br />Better Quality.</h1>
                    </div>
                </div>
            </section>
            <section className="our__brands">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-md-6">
                                <h6 data-aos="fade-in">Our brands</h6>
                                <h2 data-aos="fade-in">Crafting wood<br />into essentials that<br />make life simpler.</h2>
                            </div>
                            <div className="col-md-6">
                                <Swiper
                                    autoHeight={true}
                                    onSwiper={(s) => {
                                        setSwiper(s);
                                    }}
                                    effect={'fade'}
                                    modules={[EffectFade]}
                                >
                                    {
                                        plyWoodData.map((ele, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <div className="brand__image">
                                                        <img src={ele.image} style={{width : ele.width}} alt="" />
                                                        <Link to={ele.url} target='_blank'><button className='btn btn-secondary'>Explore website</button></Link>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }

                                </Swiper>
                                <div className="navigation">
                                    <button className={`arrow-btn ${currentIndex === 0 ? 'disabled' : ''}`} onClick={goPrev}><img src="assets/img/right-arrow.svg" alt="" /></button>
                                    <button className={`arrow-btn ${currentIndex === plyWoodData.length -1 ? 'disabled' : ''}`} onClick={goNext}><img src="assets/img/left-arrow.svg" style={{ rotate: '180deg' }} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="guarantee">
                    <div className="container">
                        <div className="overlay"></div>
                        <div className="col-md-10">
                        <h2 data-aos="fade-up">Products that are built to last, going beyond guarantee.</h2>
                        </div>
                        <div className="offset-md-6">
                            <p data-aos="fade-up" data-aos-duration="1000">For decades, Primeply Industries has been a leading manufacturer of wood and allied products in India. We're committed to excellence and constant improvement, using both advanced technology and seasoned expertise to tackle industry challenges and deliver outstanding outcomes.</p>
                            <p data-aos="fade-up" data-aos-duration="2000">Our exclusive brands, Wuudply and Primeply, symbolize premium quality and unwavering reliability. We take pride in exceed our clients' expectations, working closely with them to bring their visions to life.</p>
                        </div>
                        
                        
                    </div>
                </section>

                <section className="milestones">
                    <div className="container">
                        <div className="title"><h2>Milestone</h2></div>
                        <div className="scroll__bar row">
                        <div className="milesGrid col-md-4" data-aos="fade-up" data-aos-duration="2000">
                            <h2>1960</h2>
                            <p>Timber Trading by C. Mammu</p>
                        </div>
                        <div className="milesGrid col-md-4" data-aos="fade-up" data-aos-duration="1000">
                            <h2>1980</h2>
                            <p>Saw Mill</p>
                        </div>
                        <div className="milesGrid col-md-4" data-aos="fade-up" data-aos-duration="3000">
                            <h2>1986</h2>
                            <p>Plywood & Veneering Unit</p>
                        </div>
                        <div className="milesGrid col-md-4" data-aos="fade-up" data-aos-duration="4000">
                            <h2>1990</h2>
                            <p>Resin Plant</p>
                        </div>
                        <div className="milesGrid col-md-4" data-aos="fade-up" data-aos-duration="5000">
                            <h2>2000</h2>
                            <p>Hospitality: <br />Malabar Residency</p>
                        </div>
                        <div className="milesGrid col-md-4">
                            <h2>2001</h2>
                            <p>Second Plywood Facility</p>
                        </div>
                        <div className="milesGrid col-md-4">
                            <h2>2004</h2>
                            <p>Veneering Factory at Myanmar</p>
                        </div>
                        <div className="milesGrid col-md-4">
                            <h2>2010</h2>
                            <p>Third Plywood Facility</p>
                        </div>
                        <div className="milesGrid col-md-4">
                            <h2>2010</h2>
                            <p>Real Estate: <br /> Woodshade Builders</p>
                        </div>
                        <div className="milesGrid col-md-4">
                            <h2>2024</h2>
                            <p>Particle Board Unit</p>
                        </div>
                        </div>

                    </div>
                </section>

                <footer className="getstarted__footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,224L120,213.3C240,203,480,181,720,186.7C960,192,1200,224,1320,240L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                <div className="footer__section">
                    <div className="container">
                        <div className="row sm-reverse">
                            <div className="col-md-6">
                                <p>© {year} Primeply Industries Limited</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <ul>
                                    <li><a href="https://www.facebook.com/people/wuudply/100089879648776/?mibextid=LQQJ4d" target='_blank'>Facebook</a></li>
                                    <li><a href="https://www.instagram.com/prime.ply/" target='_blank'>Instagram</a></li>
                                    <li><a href="https://twitter.com/wuudply?s=21&t=fewMq4Eu06XGaJE98L2oIQ" target='_blank'>X</a></li>
                                    <li><a href="#" target='_blank'>Linkedin</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </footer>

        </>
    )
}
