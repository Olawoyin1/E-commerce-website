import React from 'react'
import { CiCamera } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { PiGameControllerLight } from "react-icons/pi";
import { BsPhone } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";


const Category = () => {
  return (
    <div className="home-cat">
        <div className="container2">
            <div className="cat">
                <small className="ms-4 fw-bold cat-label">Categories</small>
            </div>
            <h3 className="fw-bold mt-3">Browse By Category</h3>
            <div className="home-cat-items mt-4">
                    
                <div className="home-cat-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                        <CiCamera size={27} />
                        <small className='fw-bold'>Camera</small>
                </div>
                    
            
                <div className="home-cat-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                        <HiOutlineComputerDesktop size={27} />
                        <small className='fw-bold'>Computers</small>
                </div>
                    
            
                <div className="home-cat-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                        <BsPhone size={27} />
                        <small className='fw-bold'>Phone</small>
                </div>
                    
            
                <div className="home-cat-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                        <PiGameControllerLight size={27} />
                        <small className='fw-bold'>Gaming</small>
                </div>
                    
            
                <div className="home-cat-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                        <IoWatchOutline size={27} />
                        <small className='fw-bold'>SmartWatch</small>
                </div>
                    
            
                <div className="home-cat-item d-flex border p-3 gap-2 flex-column align-items-center justify-content-center">
                        <CiHeadphones size={27} />
                        <small className='fw-bold'>HeadPhones</small>
                </div>
                    
            
                
            </div>
                    
              
        </div>
    </div>

  )
}

export default Category