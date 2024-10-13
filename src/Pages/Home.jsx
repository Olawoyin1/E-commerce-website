import React from 'react'
import Hero from '../components/Hero'
import ShopComponent from '../components/ShopComponent'
import Quick from '../components/Quick'
import Category from '../components/Category'
import Featured from '../components/Featured'
// import Data from '../Data'

const Home = ({liked, setLiked, today, trending}) => {

  
  

  return (
    <div>
        <Hero />

      
           
        <ShopComponent
          title={"Flash Sales"} 
          header={"Today's"}
          liked={liked} 
          setLiked={setLiked}
          data={today}
        />
         
        <Category />

        <ShopComponent
          title={"Best Selling Products"} 
          header={"Trending"}
          liked={liked} 
          setLiked={setLiked}
          data={trending}
        />

        <Quick />
        <Featured />
    </div>
  )
}

export default Home