import React from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'

export default function Vision() {
    return (
        <div className='innerpage wuudly__vision'>
            <InnerBanner image={'assets/img/vision.jpg'} title='Vision ' />
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h4 data-aos="fade-up" data-aos-duration="1000">At primeply, our legacy is shaped by a team of highly skilled craftsmen dedicated to crafting the world's finest products.</h4>
                        <h2 data-aos="fade-up" data-aos-duration="1500">Vision</h2>
                    </div>
                </div>
                <div className="offset-md-5">
                    <h5 data-aos="fade-up" data-aos-duration="2000">Our vision is to exceed industry norms, bringing fresh possibilities in plywood. We achieve this through careful planning and precise execution at every step. primeply is synonymous with quality, reflecting strength and durability in all our products. Our journey continues, as we set our sights on achieving new milestones and scaling greater heights of success.</h5>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h2 data-aos="fade-up" data-aos-duration="1500" className='mission'>Mission</h2>
                    </div>
                </div>
                <div className="offset-md-5">
                <h5 data-aos="fade-up" data-aos-duration="2000">We manufacture and market high-quality plywood across various price ranges, prioritizing both the well-being of our employees and the excellence of our products. Our disciplined, competent, and committed team ensures accessibility and availability of our products in all markets we serve. With well-equipped machinery and a safe working environment, we produce the finest plywoods in the industry.</h5>
                </div>

            </div>
            <div className="vision__footer">
                <img src="assets/img/vision-footer.png" className='w-100' alt="" />
            </div>
            <div className="our__ethos">
                <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="1500">Our ethos is centred on 'Quality, <br />
                    durability, and customer satisfaction'.</h2>
                <div className="offset-md-5">
                    <h4 data-aos="fade-up" data-aos-duration="2000">These principles drive us to consistently deliver the finest products and solutions to our clients. Our track record speaks for itself, fostering strong, mutually beneficial relationships across South India. We firmly believe that a satisfied customer is invaluable, transcending mere profit margins. To all our dealers, we extend our  heartfelt gratitude. Their unwavering support has propelled us to achieve remarkable milestones. Customer feedback is invaluable, guiding us towards continuous improvement and eventual perfection.</h4>
                    <div className="director">
                        <h5>Javid CP</h5>
                        <span>Director - Primeply</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
