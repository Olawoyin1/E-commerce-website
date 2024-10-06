import React from 'react'
import ShopComponent from '../components/ShopComponent'

const WishList = () => {
  return (
    <div>
        <div className="container2">
            <ShopComponent 
                header={"Men's Clothing"}
                title={"Trending"}
            />
            <ShopComponent 
                header={"Women's Clothing"}
                title={"This Month"}
            />
            <ShopComponent 
                header={"Home & Lifestyle"}
                title={"Featured"}
            />
        </div>
    </div>
  )
}

export default WishList