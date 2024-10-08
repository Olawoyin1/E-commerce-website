import React from 'react'
import ShopComponent from '../components/ShopComponent.jsx'

const Posts = () => {
  return (
    <div>
        <div className="">
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

export default Posts