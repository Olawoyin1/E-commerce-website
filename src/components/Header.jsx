import React from 'react'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header>
        <div className="sales p-1 bg-dark text-center">
            <small className='text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            ShopNow</small>
        </div>
        <div className="container2">
            <nav className='navbar m-0'>

                <h3 className='fw-bold'>Exclusive</h3>
                <ul className='d-none d-md-flex align-items-center gap-3 m-0 p-0'>
                    <li><a className='nav-link' href="/">Home</a></li>
                    <li><a className='nav-link' href="/contact">Contact</a></li>
                    <li><a className='nav-link' href="/about">About</a></li>
                    <li><a className='nav-link' href="/signup">Signup</a></li>
                </ul>
                <div className="others d-flex align-items-center gap-2">
                    <form action="" className='d-sm-block d-none header-search m-0'>
                        <input type="text" />
                        <CiSearch className='icon' />
                    </form>
                    <CiHeart size={20} />
                    <CiShoppingCart size={20} />
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header