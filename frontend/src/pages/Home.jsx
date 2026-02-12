import React from 'react'
import Hero from '../components/Hero'
import FeatureSection from '../components/FeatureSection'
import Banner from '../components/Banner'
import Reviews from '../components/Reviews'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeatureSection/>
      <Banner/>
      <Reviews/>
      <NewsLetter/>
    </>
  )
}

export default Home