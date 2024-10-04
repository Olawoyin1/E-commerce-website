import React from 'react'

const Checkout = () => {
  return (
    <div className='checkout py-5'>
        <div className="container2">
            <div className="d-flex gap-5 flex-column  flex-md-row">
                <div className="check-inputs">
                    <p className="fw-bold">Billing Details</p>
                    <form action="" className=''>
                        <input type="text" placeholder='First Name*' />
                        <input type="text" placeholder='Company Name*' />
                        <input type="text" placeholder='Street Address*' />
                        <input type="text" placeholder='Apartment, floor, etc. (optional)' />
                        <input type="text" placeholder='Town/City*'/>
                        <input type="text" placeholder='Phone Number*'/>
                        <input type="text" placeholder='Email Address*'/>
                        <input type="checkbox" name="" id="" className='mt-3' /> Save this information for faster check-out next time
                    </form>
                </div>
                <div className="check-details d-flex flex-column gap-2 mt-md-2 ms-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <img src="../../Images/image1.png" width="40px" alt="" />
                            <small>HVT Gamepad</small>
                        </div>
                        <small>$400</small>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <img src="../../Images/f2.png" width="40px" alt="" />
                            <small>HVT Gamepad</small>
                        </div>
                        <small>$400</small>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <small className='fw-bold'>Subtotal</small>
                        <small>$400</small>
                    </div>
                    <hr className='m-0' />
                    <div className="d-flex align-items-center justify-content-between">
                        <small className='fw-bold'>Shipping</small>
                        <small>Free</small>
                    </div>
                    <hr className='m-0'/>
                    <div className="d-flex align-items-center justify-content-between">
                        <small className='fw-bold'>Total</small>
                        <small>1000</small>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <input type="radio" name="" id="" />
                            <small>Bank</small>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <img src="../../Images/payment-1.png" width="40px" alt="" />
                            <img src="../../Images/payment-2.png" width="40px" alt="" />
                            <img src="../../Images/payment-3.png" width="40px" alt="" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-2 ">
                        <input type="radio" name="" id="" />
                        <small>Pay on delivery</small>
                    </div>
                    <form action="" className='d-flex p-0 m-0 align-content-center gap-2'>
                        <input className='mt-0 w-50' type="text" />
                        <button className="main-btn ">Apply Coupon</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout