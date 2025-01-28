import React from 'react'
import Banner from '../components/Banner'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import SubscribeBox from '../components/SubscribeBox'

const Home = () => {
  return (
    <div>
      <Banner/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <SubscribeBox/>
    </div>
  )
}

export default Home