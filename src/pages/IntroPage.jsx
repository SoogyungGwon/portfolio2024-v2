import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// import background for publishing
import background from '../assets/bg/background.svg'

const IntroPage = ( {setIntroDone} ) => {

  const [catchPrase,setCatchPrase] = useState('Blur & Focus')

    const handleIntroDone = () => {
        setIntroDone(true)
    }

    const handleMouseEnter =() => {
      setCatchPrase('Soogyung Gwon')
    }

    const handleMouseLeave =() => {
      setCatchPrase('Blur & Focus')
    }

    useEffect(() => {
      setIntroDone(false)
    }, [])

  return (
    <main id="intro-page-main">
      <Link className="site-intro" to="/home" onClick={handleIntroDone} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h1 className="site-intro-heading" style={{ whiteSpace: 'pre-line' }} >{catchPrase}</h1>
        <div className="start-button">start</div>
      </Link>
      <h2 className="site-intro-my-name">Front-End Web Developer, Soogyung Gwon</h2>
    </main>
  )
}

export default IntroPage