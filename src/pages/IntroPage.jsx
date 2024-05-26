import React from 'react'
import { Link } from 'react-router-dom';

// import background for publishing
import background from '../assets/bg/background.svg'

const IntroPage = ( {setIntroDone} ) => {

    const handleIntroDone = () => {
        setIntroDone(true)
    }

    const handleMouseEnter =() => {
      
    }

    const handleMouseLeave =() => {
      
    }

  return (
    <main id="intro-page-main">
      <section className="site-intro">
        <h1 className="site-intro-heading" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Blur & Focus</h1>
        <Link className="start-button" to="/home" onClick={handleIntroDone}>Start</Link>
      </section>
    </main>
  )
}

export default IntroPage