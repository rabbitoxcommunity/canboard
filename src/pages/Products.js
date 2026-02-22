import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AOS from 'aos';

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

export default function Products() {
    const { id } = useParams();
    const product = productData[id] || productData.europa;

    useEffect(() => {
        AOS.init({ duration: 2000 });
        window.scrollTo(0, 0);
    }, [id]);

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
                <div className="container">
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
                </div>
            </section>
        </div>
    )
}
