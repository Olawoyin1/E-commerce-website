import React from 'react'
import Hero from '../components/Hero'
import ShopComponent from '../components/ShopComponent'
import Quick from '../components/Quick'

const Home = () => {
  return (
    <div>
        <Hero />
        <ShopComponent
            header={"Today's"}
            title={"Flash Sales"}
        />

        <div className="home-cat">
            <div className="container2">
                <div className="cat">
                    <small className="ms-4 fw-bold cat-label">Categories</small>
                </div>
                <h3 className="fw-bold mt-3">Browse By Category</h3>
                <div className="home-cat-items ">
                    
                </div>
            </div>
        </div>

        <ShopComponent
            header={"Trending"}
            title={"Best Selling Products"}
        />

        <Quick />
    </div>
  )
}

export default Home