import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

// import images
import darkPurpleDot from '../assets/bg/dark-purple.svg'
import lightPurpleDot from '../assets/bg/light-purple.svg'

// import component
import HomeHighlights from '../components/HomeHighlights'

// import variables
import { restBase } from '../globals/globalVariables'

const HomeIntro = () => {
  const restPath = restBase + 'pages/10'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)

  const firstDotStyle = {
    backgroundImage: `url(${darkPurpleDot})`,
        backgroundSize: `100% 100%`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        width: `100%`,
  }

  const secondDotStyle = {
    backgroundImage: `url(${lightPurpleDot})`,
        backgroundSize: `100% 100%`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        width: `100%`,
        opacity: `0.95`,
  }

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
    <>
    { isLoaded ?
    <section className="intro">
      {/* Intro h1 text */}
      <div id="intro-text-wrapper">
        <h1 className='intro-text'>
          <article id="first-dot" style={ firstDotStyle }>
            <p className='describe-me-01'>Creative Mind</p>
            <p className='title'>{restData.acf.home_second_line}</p>
          </article>
          <div className='plus'>+</div>
          <article id="second-dot" style={ secondDotStyle }>         
            <p className='name'>{restData.acf.home_first_line}</p>
            <p className='describe-me-02'>Warmth</p>
          </article>
        </h1>
      </div>
      <HomeHighlights />
    </section>
    :
    <Loading />
    }
    </>
  )
  
}

export default HomeIntro