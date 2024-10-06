import React from 'react'
import { FaRegHeart } from "react-icons/fa6";


const ProductDetail = () => {
  return (
    <div className='product-details my-5'>
        <div className="container2">
            <div className="d-flex gap-4 flex-md-row flex-column">
                <div className="prod-image rounded d-flex align-content-center justify-content-center p-3 w-100">
                    <img src="../../Images/image1.png" alt="" />
                </div>
                <div className="prod-details d-flex flex-column gap-2 w-100">
                    <h4 className="fw-bold">Havit MVP Gamepad 2023</h4>
                    <div className="d-flex gap-2">
                        <img src="../../images/stars.png" width="40px" alt="" />
                        <small>(120 Reviews) | in Stock</small>
                    </div>
                    <p>$130</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui ad nulla asperiores magnam totam error dolore, dolores quidem quasi blanditiis quam voluptatum odit assumenda ea libero. Dicta, totam ratione.</small>
                    <hr className='m-0 p-0' />
                    <div className="sizes d-flex align-items-center gap-3">
                        <p>Size: </p>
                        <p className='size border p-2'>XS</p>
                        <p className='size border p-2'>S</p>
                        <p className='size border p-2'>M</p>
                        <p className='size border p-2'>L</p>
                        <p className='size border p-2'>XL</p>
                    </div>
                    <div className="d-flex gap-4">
                        <div className="counter d-flex text-center align-items-center border">
                            <button className='main-btn bg-dark hover text-white'>-</button>
                            <p className='px-3'>4</p>
                            <button className='main-btn bg-dark hover text-white'>+</button>
                        </div>
                        <button className="main-btn w-50">Buy Now</button>
                        <button className="px-2"><FaRegHeart /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail