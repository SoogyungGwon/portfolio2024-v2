import React from 'react'
import { useState, useEffect } from 'react'

// import components
import AboutSkillset from '../components/AboutSkillset'
import AboutFunfacts from '../components/AboutFunfacts'
import Loading from '../components/Loading'

// import image
import darkDot from '../assets/bg/dark-purple.svg'
import coverImg from '../assets/my-story-cover.jpg'

// import variables
import { restBase } from '../globals/globalVariables'

const AboutPage = () => {
  const restPath = restBase + 'pages/30'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)
  

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(restPath)

        if ( response.ok ) {
            const data = await response.json()
            setData(data)
            setLoadStatus(true)
        } else {
            setLoadStatus(false)
        }
    }
    fetchData()
  }, [restPath])

  return (
  <main id="about-main">
  { isLoaded ?
    <>
      <section className="introduction-text">
        <div className="about-story-heading">
          {<img src={darkDot} id='about-dot'/>}
          <h1 className="about-story-title">My Story</h1>
          <h2 className="about-story-sub-heading" dangerouslySetInnerHTML={{__html:restData.acf['my_story_sub-heading']}}></h2>
        </div>
        <img alt='' className='cover-story-image' src={coverImg} />
        <div className="about-story-content">
          <p className="about-story-para" dangerouslySetInnerHTML={{__html:restData.acf.my_story_content}}></p>
        </div>

      </section>
      <AboutSkillset />
      <AboutFunfacts />
    </>
    :
    <Loading />
  }
  </main>
  )
}

export default AboutPage