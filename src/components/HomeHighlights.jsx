import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

// import variables
import { restBase } from '../globals/globalVariables'

const HomeHighlights = () => {
  const restPath = restBase + 'soo-project'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  }

  const randomNumber = getRandomNumber(restData.length);

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
      <div id="hightlights-wrapper">
        <h2>Project Highlights</h2>
        <div className="highlights-container">
            <p className="highlight">
                {restData[randomNumber].acf.project_highlight}
            </p>
            <Link to={`/projects/${restData[randomNumber].slug}`}><button className="highlight-more-button">See More</button></Link>
        </div>
        
      </div>
    :
    <Loading />
    }
    </>
  )
  
}

export default HomeHighlights