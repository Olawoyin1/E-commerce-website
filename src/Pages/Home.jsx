import React from 'react'
import Hero from '../components/Hero'
import ShopComponent from '../components/ShopComponent'
import Quick from '../components/Quick'
import Category from '../components/Category'

const Home = () => {
  return (
    <div>
        <Hero />
        <ShopComponent
            header={"Today's"}
            title={"Flash Sales"}
        />

        <Category />

        <ShopComponent
            header={"Trending"}
            title={"Best Selling Products"}
        />

        <Quick />
    </div>
  )
}

export default Home