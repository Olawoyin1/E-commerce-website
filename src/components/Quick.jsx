import React from 'react'

const Quick = () => {
  return (
    <div className='quick my-4'>
        <div className="container2">
            <div className="d-flex  align-items-center flex-column flex-md-row quick-box bg-dark text-white p-4">
                <div className="q-details d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start flex-column text-center text-md-start gap-4  text-white p-4">
                    <small className='coloured'>Categories</small>
                    <h1 className="fw-bold">Enhance Your Music Experience</h1>
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
                <div className="q-image">
                    <img src="../../Images/item8.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quick