import React from 'react'
import ShopComponent from '../components/ShopComponent.jsx'

const Posts = ({liked , setLiked}) => {
  return (
    <div>
        <div className="">
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
    </div>
  )
}

export default Posts