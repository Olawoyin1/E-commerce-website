import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="sales p-1 bg-dark text-center">
            <small className='text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            ShopNow</small>
        </div>
        <div className="container2">
            <nav className='navbar m-0'>

                <Link to="/"><h3 className='fw-bold'>Exclusive</h3></Link>
                <ul className='d-none d-md-flex align-items-center gap-3 m-0 p-0'>
                    <li><Link className='nav-link' to="/">Home</Link></li>
                    <li><Link className='nav-link' to="/contact">Contact</Link></li>
                    <li><Link className='nav-link' to="/about">About</Link></li>
                    <li><Link className='nav-link' to="/signup">Signup</Link></li>
                </ul>
                <div className="others d-flex align-items-center gap-3">
                    <form action="" className='d-sm-block d-none header-search m-0'>
                        <input type="text" placeholder='What are you looking for?'/>
                        <CiSearch className='icon' />
                    </form>
                    <Link className='nav-link' to="/"><FaRegHeart size={20} /></Link>
                    <Link className='nav-link' to="/cart"><GrCart size={20}/></Link>
                    <Link className='nav-link' to="/user"><FiUser size={20} /></Link>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header