import Ash from '@/component/Ash'
import Bottom from '@/component/Bottom'
import Dash from '@/component/Dash'
import Explore from '@/component/Explore'
import Navbar from '@/component/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Dash/>
      <Ash/>
      <Explore/>
      <Bottom/>
    </div>
  )
}

export default page