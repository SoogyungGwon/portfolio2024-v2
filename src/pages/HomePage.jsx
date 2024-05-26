import React from 'react'
import HomeIntro from '../components/HomeIntro'
import HomeFeatured from '../components/HomeFeatured'
import HomeQuickview from '../components/HomeQuickview'
import HomeCurious from '../components/HomeCurious'

const HomePage = () => {
  return (
    <main>
        <HomeIntro />
        <HomeFeatured />
        <HomeQuickview />
        <HomeCurious />
    </main>
  )
}

export default HomePage
