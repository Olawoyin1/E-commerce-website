import React from 'react'
import { VscSend } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer py-4'>
        <div className="container2">
            <div className="row row-cols-1 row-col-sm-2 row-cols-md-3 row-cols-lg-4 m-0">
                <div className='d-flex flex-column gap-2'>
                    <h5 className="fw-bold">Exclusive</h5>
                    <p>Subscribe</p>
                    <small>Get 10% off your first order</small>
                    <form action="" className='d-sm-block d-none header-search m-0'>
                        <input type="email" placeholder='Enter your email'/>
                        <VscSend  className='icon' />
                    </form>
                </div>


                <div className='d-flex flex-column gap-2'>
                    <h5 className="fw-bold">Support</h5>                    
                    <small>19 Ekemode street Oke-Oko Isawo Ikorodu Lagos State.</small>
                    <small>yustee2017@gmail.com</small>
                    <small>+234 8168 028 145</small>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <h5 className="fw-bold">Account</h5>
                    <Link className='nav-link' to="">My Account</Link>
                    <Link className='nav-link' to="">Login / Register</Link>
                    <Link className='nav-link' to="">Cart</Link>
                    <Link className='nav-link' to="">Wishlist</Link>
                    <Link className='nav-link' to="">Shop</Link>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <h5 className="fw-bold">Quick Link</h5>
                    <Link className='nav-link' to="">Privacy Policy</Link>
                    <Link className='nav-link' to="">Terms Of Use</Link>
                    <Link className='nav-link' to="">FAQ</Link>
                    <Link className='nav-link' to="">Contact</Link>
                </div>

                




          





          
            </div>
        </div>
    </div>
  )
}

export default Footer