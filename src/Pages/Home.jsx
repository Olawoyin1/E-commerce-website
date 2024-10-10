import React from 'react'
import Hero from '../components/Hero'
import ShopComponent from '../components/ShopComponent'
import Quick from '../components/Quick'
import Category from '../components/Category'
import Featured from '../components/Featured'

const Home = ({liked, setLiked, slider}) => {

  return (
    <div>
        <Hero />
          
        <ShopComponent
          title={"Flash Sales"} 
          header={"Today's"}
          liked={liked} 
          setLiked={setLiked}
          search={"Today's"}
        />
      
        <Category />

        <ShopComponent
            search={"Trending"}
            header={"Trending"}
            title={"Best Selling Products"}
            liked={liked} 
            setLiked={setLiked}
        />

        <Quick />
        <Featured />
    </div>
  )
}

export default Home