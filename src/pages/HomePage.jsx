import React from 'react'
import { useEffect } from 'react'
import HomeIntro from '../components/HomeIntro'
import HomeFeatured from '../components/HomeFeatured'
import HomeQuickview from '../components/HomeQuickview'
import HomeCurious from '../components/HomeCurious'

const HomePage = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }  

  useEffect(() => {
    scrollToTop();
  }, [])

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
