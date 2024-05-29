import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// import background for publishing
import background from '../assets/bg/background.svg'

const IntroPage = () => {

  const [catchPrase,setCatchPrase] = useState('Blur & Focus')

    const handleMouseEnter =() => {
      setCatchPrase('Soogyung Gwon')
    }

    const handleMouseLeave =() => {
      setCatchPrase('Blur & Focus')
    }

  return (
    <main id="intro-page-main">
      <Link className="site-intro" to="/home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h1 className="site-intro-heading" style={{ whiteSpace: 'pre-line' }} >{catchPrase}</h1>
      </Link>
      <Link className="start-button" to="/home" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>start</Link>
    </main>
  )
}

export default IntroPage