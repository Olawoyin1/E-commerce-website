import React from 'react'
import Slider from "react-slick";
import { AiOutlineApple } from "react-icons/ai";
import { PiMusicNotesSimple } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
    };
  return (
    <section className="hero p-0">
        <div className="container3">
            <div className="row m-0">
                <div className="col-md-3 d-none d-md-block p-0">
                    <ul className='p-0 m-0 pt-3 sidebar'>
                        <li><Link className='nav-link siderbar-link' to="/post">Woman's Fashion</Link></li>
                        <li><Link className='nav-link siderbar-link' to="/post">Men's Fashion</Link></li>
                        <li><Link className='nav-link siderbar-link' to="/post">Electronics</Link></li>
                        <li><Link className='nav-link siderbar-link' to="/post">Home & Lifestyle</Link></li>
                        <li><Link className='nav-link siderbar-link' to="/post">Medicine</Link></li>
                        <li><Link className='nav-link siderbar-link' to="/post">Sports & Outdoor</Link></li>
                        <li><Link className='nav-link siderbar-link' to="/post">Baby's & Toys</Link></li>
                        <li><Link className='nav-link siderbar-link' to="/post">Health & Beauty</Link></li>
                    </ul>
                </div>
                <div className="col-md-9 mt-md-2 p-0 m-0">
                    <div className="hero-banner m-0">
                        <div className="slider-container">
                            <Slider {...settings}>

                                <div className="d-flex align-items-center flex-column flex-md-row hero-slide bg-dark text-white p-2">
                                    <div className="q-details d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start flex-column text-center text-md-start gap-3  text-white p-4">
                                        <small className='text-white d-flex align-items-center'><PiMusicNotesSimple size={27} color='white' /> Music</small>
                                        <h3 className="fw-bold">Enhance Your Music Experience</h3>
                                        <div className="time-left d-flex gap-3">
                                            <div className="time-box ">
                                                <p className=' fw-bold'>23</p>
                                                <small className=''>HOURS</small>
                                            </div>
                                            <div className="time-box">
                                                <p className='fw-bold'>07</p>
                                                <small className=''>DAYS</small>
                                            </div>
                                            <div className="time-box">
                                                <p className=' fw-bold'>29</p>
                                                <small className=''>MINUTES</small>
                                            </div>
                                            <div className="time-box">
                                                <p className=' fw-bold'>37</p>
                                                <small className=''>SECONDS</small>
                                            </div>
                                        </div>
                                        <button className='main-btn'>Buy Now</button>
                                    </div>
                                    <div className="slider-image">
                                        <img src="../../Images/item8.png" alt="" />
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-column flex-md-row hero-slide bg-black text-white p-2">
                                    <div className="q-details d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start flex-column text-center text-md-start gap-3  text-white p-4">
                                        <small className='text-white d-flex align-items-center'><AiOutlineApple size={27} color='white' /> iPhone 14 Series</small>
                                        <h3 className="fw-bold">Up to 10% off Voucher</h3>
                                        <div className="time-left d-flex gap-3">
                                            <div className="time-box ">
                                                <p className=' fw-bold'>23</p>
                                                <small className=''>HOURS</small>
                                            </div>
                                            <div className="time-box">
                                                <p className='fw-bold'>07</p>
                                                <small className=''>DAYS</small>
                                            </div>
                                            <div className="time-box">
                                                <p className=' fw-bold'>29</p>
                                                <small className=''>MINUTES</small>
                                            </div>
                                            <div className="time-box">
                                                <p className=' fw-bold'>37</p>
                                                <small className=''>SECONDS</small>
                                            </div>
                                        </div>
                                        <button className='main-btn'>Buy Now</button>
                                    </div>
                                    <div className="slider-image">
                                        <img src="../../Images/hero.png" alt="" />
                                    </div>
                                </div>

                                <div className="d-flex align-items-center flex-column flex-md-row hero-slide bg-black text-white p-2">
                                    <div className="q-details d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start flex-column text-center text-md-start gap-3 text-white p-4">
                                        <small className='text-white d-flex align-items-center'><AiOutlineApple size={27} color='white' /> iPhone 14 Series</small>
                                        <h3 className="fw-bold">Up to 10% off Voucher</h3>
                                        <div className="time-left d-flex gap-3">
                                            <div className="time-box ">
                                                <p className=' fw-bold'>23</p>
                                                <small className=''>HOURS</small>
                                            </div>
                                            <div className="time-box">
                                                <p className='fw-bold'>07</p>
                                                <small className=''>DAYS</small>
                                            </div>
                                            <div className="time-box">
                                                <p className=' fw-bold'>29</p>
                                                <small className=''>MINUTES</small>
                                            </div>
                                            <div className="time-box">
                                                <p className=' fw-bold'>37</p>
                                                <small className=''>SECONDS</small>
                                            </div>
                                        </div>
                                        <button className='main-btn'>Buy Now</button>
                                    </div>
                                    <div className="slider-image">
                                        <img src="../../Images/prod9.png" alt="" />
                                    </div>
                                </div>

                               

                                <div className="d-flex align-items-center flex-column flex-md-row hero-slide bg-black text-white p-2">
                                    <div className="q-details d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start flex-column text-center text-md-start gap-3  text-white p-4">
                                        <small className='text-white d-flex align-items-center'><AiOutlineApple size={27} color='white' /> iPhone 14 Series</small>
                                        <h3 className="fw-bold">Up to 10% off Voucher</h3>
                                        <div className="time-left d-flex gap-3">
                                            <div className="time-box ">
                                                <p className=' fw-bold'>23</p>
                                                <small className=''>HOURS</small>
                                            </div>
                                            <div className="time-box">
                                                <p className='fw-bold'>07</p>
                                                <small className=''>DAYS</small>
                                            </div>
                                            <div className="time-box">
                                                <p className=' fw-bold'>29</p>
                                                <small className=''>MINUTES</small>
                                            </div>
                                            <div className="time-box">
                                                <p className=' fw-bold'>37</p>
                                                <small className=''>SECONDS</small>
                                            </div>
                                        </div>
                                        <button className='main-btn'>Buy Now</button>
                                    </div>
                                    <div className="slider-image">
                                        <img src="../../Images/prod9.png" alt="" />
                                    </div>
                                </div>

                               
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero