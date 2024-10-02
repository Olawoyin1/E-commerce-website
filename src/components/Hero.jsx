import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
        <div className="container2">
            <div className="row m-0">
                <div className="col-md-3 d-none d-md-block p-0">
                    <ul className='p-0 m-0 pt-3 sidebar'>
                        <li><a className='nav-link siderbar-link' href="/">Woman's Fashion</a></li>
                        <li><a className='nav-link siderbar-link' href="/">Men's Fashion</a></li>
                        <li><a className='nav-link siderbar-link' href="/">Electronics</a></li>
                        <li><a className='nav-link siderbar-link' href="/">Home & Lifestyle</a></li>
                        <li><a className='nav-link siderbar-link' href="/">Medicine</a></li>
                        <li><a className='nav-link siderbar-link' href="/">Sports & Outdoor</a></li>
                        <li><a className='nav-link siderbar-link' href="/">Baby's & Toys</a></li>
                        <li><a className='nav-link siderbar-link' href="/">Health & Beauty</a></li>
                    </ul>
                </div>
                <div className="col-md-9 mt-3">
                    <div className="hero-banner bg-dark">
                        <h3>hello</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero