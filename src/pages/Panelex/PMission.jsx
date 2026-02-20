import React from 'react'

export default function PMission() {
    return (
        <>
            <section className="panelex__mission" style={{ backgroundImage: 'url(/assets/panelex/mission.jpg)' }}>
                <div className="container">
                    <div className="contents">
                        <div className="col-md-8 col-tab-12">
                            <h2>Our mission:</h2>
                            <h1>Lead the way to sustainable Planet.</h1>
                        </div>
                        <div className="offset-md-7 col-md-5">
                            <p>Our top priority is to drive sustainable innovation that makes real impact— on our business, our customers, our communities, and the planet. Guided by a clear mission, we shape every process with purpose, working together to build a future that supports well-being for all.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mission__contents pt-0 pb-0">
                <div className="container-fluid">
                    <div className="row align-items-center sm-reverse">
                        <div className="col-md-6 px-0">
                            <img src="/assets/panelex/mission1.jpg" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="contents">
                            <h2>Investing in People.</h2>
                            <p>Our commitment to sustainability goes beyond products; it’s about the people who craft and use them. We invest in our team’s well-being and foster a culture of innovation. Building on a legacy of craftsmanship, we create designs that reflect the skill and dedication of our talented team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="contents">
                              <h2>Preserving Our Planet.</h2>
                            <p>Every decision is made with the planet in mind. With responsibly sourced materials and efficient production processes, we act responsibly to minimize our environmental footprint. Our approach reflects our deep responsibility to the Earth, ensuring our products' longevity and their contribution to a more sustainable future.</p>
                          </div>
                        </div>
                        <div className="col-md-6 px-0">
                            <img src="/assets/panelex/mission2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
