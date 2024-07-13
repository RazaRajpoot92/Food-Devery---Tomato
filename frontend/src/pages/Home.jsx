import React, { useState } from 'react'
import Hero from '../components/Hero'
import ExploreMenu from '../components/ExploreMenu'
import FoodContainer from '../components/FoodContainer'
import AppDownload from '../components/AppDownload'

const Home = () => {

    const [category, setCategory] = useState("All")

  return (
    <div>
        <Hero />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodContainer category={category} />
        <AppDownload />
    </div>
  )
}

export default Home