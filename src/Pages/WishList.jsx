import React from 'react'
import ShopComponent from '../components/ShopComponent'

const WishList = ({liked, setLiked, trending, wCloth, mCloth}) => {
  return (
    <div>
        <ShopComponent 
            header={"WishList"}
            title={""}
            liked={liked}
            setLiked={setLiked}
            data={liked}
        />
        <ShopComponent 
            header={"Women's Clothing"}
            title={"This Month"}
            liked={liked}
            setLiked={setLiked}
            data={wCloth}
        />
        <ShopComponent 
            header={"Men's Clothing"}
            title={"This Month"}
            liked={liked}
            setLiked={setLiked}
            data={mCloth}
        />
        <ShopComponent 
            header={"Home & Lifestyle"}
            title={"Featured"}
            liked={liked} 
            setLiked={setLiked}
            data={trending}
        />
    </div>
  )
}

export default WishList