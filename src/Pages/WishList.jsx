import React from 'react'
import ShopComponent from '../components/ShopComponent'

const WishList = ({liked, setLiked}) => {
  return (
    <div>
        <ShopComponent 
            header={"Men's Clothing"}
            title={"Trending"}
            liked={liked} setLiked={setLiked}
        />
        <ShopComponent 
            header={"Women's Clothing"}
            title={"This Month"}
            liked={liked} setLiked={setLiked}
        />
        <ShopComponent 
            header={"Home & Lifestyle"}
            title={"Featured"}
            liked={liked} setLiked={setLiked}
        />
    </div>
  )
}

export default WishList