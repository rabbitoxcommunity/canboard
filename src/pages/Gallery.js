import React from 'react'
import InnerBanner from '../components/InnerBanner/InnerBanner'
import Fancybox from '../components/Fancybox'

export default function Gallery() {
    return (
        <div className='innerpage primeply__gallery'>
            <InnerBanner image={'assets/img/gallery.jpg'} title='Gallery' />
            <section>
                <div className="container">
                    <Fancybox>
                        <div className="row">
                            <div className="col-md-4">
                                <a data-fancybox="gallery" className='gallery__grid' href="https://youtu.be/nZxXMLdm-_A?si=Zk2wTL6JDWpc6pm8">
                                    <img alt="" src="assets/img/gallery/1.jpg" data-aos="fade-up" data-aos-duration="1000" className='w-100' />
                                </a>
                            </div>
                            <div className="col-md-4">
                            <a data-fancybox="gallery" className='gallery__grid' href="https://youtu.be/m3HKfk1lA58?si=eqHElUEMbzTpXV8C">
                                    <img alt="" src="assets/img/gallery/2.jpg" data-aos="fade-up" data-aos-duration="2000" className='w-100' />
                                </a>
                            </div>
                            <div className="col-md-4">
                            <a data-fancybox="gallery" className='gallery__grid' href="https://youtu.be/fQxNxsCrbh8?si=CHXLYSIrC9iObNJG">
                                    <img alt="" src="assets/img/gallery/3.jpg" data-aos="fade-up" data-aos-duration="3000" className='w-100' />
                                </a>
                            </div>
                        </div>


                    </Fancybox>
                </div>
            </section>
        </div>
    )
}
