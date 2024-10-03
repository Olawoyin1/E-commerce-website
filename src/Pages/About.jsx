import React from 'react'
import { MdSell } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaShopify } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='my-4'>
        <div className="container2">
            <div className="gap-4 flex-column-reverse flex-md-row align-items-center d-flex m-0 mt-3 ">
                <div className="col">
                <h2 className='fw-bold mb-3'>Our Story</h2>
                <p >
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                </p>
                </div>
                <div className="col">
                    <img src="../../Images/bags.png" alt="" />
                </div>
            </div>


            <div className="grid my-4 py-4">
                <div className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                    <MdSell size={27} />
                    <p className='fw-bold'>10.5k </p>
                    <small>Sellers active on our site</small>
                </div>
                <div className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                    <HiMiniCurrencyDollar size={27} />
                    <p className='fw-bold'>33k</p>
                    <small>Monthly Product Sale</small>
                </div>
                <div className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                    <FaShopify size={27} />
                    <p className='fw-bold'>45.5k</p>
                    <small>Customer active in our site</small>
                </div>
                <div className="grid-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                    <FaSackDollar size={27} />
                    <p className='fw-bold'>25k</p>
                    <small>Anual gross sale in our site</small>
                </div>
            </div>


            <div className="grid">

                <div className="item ">
                    <div className="member-image rounded d-flex align-items-center justify-content-center">
                        <img src="../../Images/user1.png" alt="" />                   
                    </div>

                    <div className="item-details d-flex flex-column gap-2 pt-2">
                        <p className="fw-bold">Olawoyin Gbolahan</p>
                        <small>Founder & Chairman</small>
                        <div className="d-flex align-items-center gap-2">
                            <Link className='nav-link' to="/"><FaXTwitter /></Link>
                            <Link className='nav-link' to="/"><FaLinkedin /></Link>
                            <Link className='nav-link' to="/"><FaInstagram /></Link>
                        </div>
                    </div>
                </div>

                <div className="item ">
                    <div className="member-image rounded d-flex align-items-center justify-content-center">
                        <img src="../../Images/user2.png" alt="" />                   
                    </div>

                    <div className="item-details d-flex flex-column gap-2 pt-2">
                        <p className="fw-bold">Olawoyin Gbolahan</p>
                        <small>Managing Director</small>
                        <div className="d-flex text-dark align-items-center gap-2">
                            <Link className='nav-link' to="/"><FaXTwitter /></Link>
                            <Link className='nav-link' to="/"><FaLinkedin /></Link>
                            <Link className='nav-link' to="/"><FaInstagram /></Link>
                        </div>
                    </div>
                </div>

                <div className="item ">
                    <div className="member-image rounded d-flex align-items-center justify-content-center">
                        <img src="../../Images/user3.png" alt="" />                   
                    </div>

                    <div className="item-details d-flex flex-column gap-2 pt-2">
                        <p className="fw-bold">Olawoyin Gbolahan</p>
                        <small>Product Designer</small>
                        <div className="d-flex align-items-center gap-2">
                            <Link className='nav-link' to="/"><FaXTwitter /></Link>
                            <Link className='nav-link' to="/"><FaLinkedin /></Link>
                            <Link className='nav-link' to="/"><FaInstagram /></Link>
                        </div>
                    </div>
                </div>

            </div>







            <div className="container2">
                <div className="grid my-4 py-4">
                    <div className="d-flex   gap-2 flex-column align-items-center text-center justify-content-center">
                        <GrDeliver size={27} />
                        <small className='fw-bold text-center'>FREE AND FAST DELIVERY</small>
                        <small>Free delivery for all orders over $140</small>
                    </div>
                    <div className="d-flex text-center  gap-2 flex-column align-items-center justify-content-center">
                        <RiCustomerService2Fill size={27} />
                        <small className='fw-bold text-center'>24/7 CUSTOMER SERVICE</small>
                        <small>Friendly 24/7 customer support</small>
                    </div>
                    <div className="d-flex text-center gap-2 flex-column align-items-center justify-content-center">
                        <LuShieldCheck size={27} />
                        <small className='fw-bold text-center'>MONEY BACK GUARANTEE</small>
                        <small>We reurn money within 30 days</small>
                    </div>
                </div>
            </div>

















        </div>
    </div>
  )
}

export default About