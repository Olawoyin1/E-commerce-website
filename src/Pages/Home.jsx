import React from 'react'
import Hero from '../components/Hero'
import ShopComponent from '../components/ShopComponent'
import Quick from '../components/Quick'
import Category from '../components/Category'
import Data from '../Data'
import Featured from '../components/Featured'

const Home = () => {

  const Today = Data.filter(item => item.category === "Today's")

  return (
    <div>
        <Hero />
        <ShopComponent
          header={"Today's"}
          title={"Flash Sales"}
          data={Today}
        />
      
        <Category />

        <ShopComponent
            header={"Trending"}
            title={"Best Selling Products"}
        />

        <Quick />
        <Featured />
    </div>
  )
}

export default Home