import Ash from '@/component/Ash'
import Bottom from '@/component/Bottom'
import CodeTicker from '@/component/CodeTicker'
import Dash from '@/component/Dash'
import Explore from '@/component/Explore'
import LearnCTA from '@/component/LearnCTA'
import Navbar from '@/component/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Dash/>
      <CodeTicker/>
      <Ash/>
      <Explore/>
      <LearnCTA/>
      <Bottom/>
    </div>
  )
}

export default page
