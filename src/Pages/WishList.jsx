import React from 'react'
import ShopComponent from '../components/ShopComponent'

const WishList = ({liked, setLiked}) => {
  return (
    <div>
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
  )
}

export default WishList