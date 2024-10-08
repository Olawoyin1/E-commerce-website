import React from 'react'
import { VscSend } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer bg-black py-4'>
        <div className="container2">
            <div className="row row-cols-1 row-col-sm-2 row-cols-md-3 row-cols-lg-4 m-0 mb-3">
                <div className='d-flex mt-3  flex-column gap-2'>
                    <h5 className="fw-bold">E-commerce</h5>
                    <p>Subscribe</p>
                    <small>Download Our App</small>
                    <small>Get 10% off your first order</small>
                    <form action="" className='d-sm-block d-none header-search m-0'>
                        <input type="email" placeholder='Enter your email'/>
                        <VscSend  className='icon' />
                    </form>
                </div>


                <div className='d-flex mt-3  flex-column gap-2'>
                    <h5 className="fw-bold">Support</h5>                    
                    <small>19 Ekemode street Oke-Oko Isawo Ikorodu Lagos State.</small>
                    <small>yustee2017@gmail.com</small>
                    <small>+234 8168 028 145</small>
                </div>

                <div className='d-flex mt-3  flex-column gap-2'>
                    <h5 className="fw-bold">Account</h5>
                    <Link className='nav-link' to="/user">My Account</Link>
                    <Link className='nav-link' to="/login">Login / Register</Link>
                    <Link className='nav-link' to="/cart">Cart</Link>
                    <Link className='nav-link' to="/wishlist">Wishlist</Link>
                    <Link className='nav-link' to="/shop">Shop</Link>
                </div>

                <div className='d-flex mt-3 flex-column gap-2'>
                    <h5 className="fw-bold">Quick Link</h5>
                    <Link className='nav-link' to="/">Privacy Policy</Link>
                    <Link className='nav-link' to="/">Terms Of Use</Link>
                    <Link className='nav-link' to="/">FAQ</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                    <Link className='nav-link' to="/checkout">Checkout</Link>
                </div>

          
            </div>
            <div className="footer_end text-center pt-2 mt-4  border-top">
                <small>© Copyright Olawoyin 2024. All right reserved</small>
            </div>
        </div>
    </div>
  )
}

export default Footer