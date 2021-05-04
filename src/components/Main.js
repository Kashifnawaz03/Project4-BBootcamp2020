import React from 'react';
import './Main.css';

import img1 from '../images/img1.gif';
import Typical from 'react-typical';

export const Main = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 -pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1><Typical loop={Infinity}
                                        wrapper='b'
                                        steps={[
                                            'We are the best in the town ',
                                            1000,
                                        ]}
                                    />
                                    </h1>
                                    <h2 className="my-3">We do teamwork to perform our duties</h2>
                                    <div className="mt-3">
                                        <a href="" className="btn">Lets Start</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={img1} className="img-fluid animated" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}