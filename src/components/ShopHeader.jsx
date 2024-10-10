import React from 'react'

import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";



const ShopHeader = ({header , title, slider}) => {

  return (
    <div className=''>
        <div className="cat">
          <small className="ms-4 fw-bold cat-label">{header}</small>
        </div>
        <div className="cat-header mt-3 d-flex align-items-center justify-content-between">
          <h3 className="fw-bold ">{title}</h3>
          <div className="d-flex align-items-center gap-2">
            <button 
                className="round" 
                onClick={() => slider?.current?.slickPrev()}
            ><IoIosArrowRoundBack size={20} /></button>
            <button 
                onClick={() => slider?.current?.slickNext()}
                className="round"
            ><IoIosArrowRoundForward size={20} /></button>
          </div>
        </div>
    </div>
  )
}

export default ShopHeader