import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

// import image
import findoutImg from '../assets/icons/link.svg'

// import variables
import { restBase } from '../globals/globalVariables'

const HomeQuickview = () => {
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
    <>
    { isLoaded ?
    <section className="quickview" id="quickview-home">
      <div className="quickview-wrapper">
        <h2>Quick View About Me</h2>
        <div className="quickview-excerpt">
          <p className="about-excerpt" dangerouslySetInnerHTML={{__html:restData.content.rendered}}></p>
        </div>
        <div className="quickview-tags">
          {restData.acf.home_quickview_tags.map((tag) => (
            <span key={tag.skillset} className="quickview-tag">{tag.skillset}</span>
          ))}
        </div>
        <Link to="/about">
          <button className="quickview-findout-button">
            <p>Find out more</p>
            {<img src={findoutImg} alt="Find our more"></img>}
          </button>
        </Link>
      </div>
    </section>
    :
    <Loading />
    }
    </>
  )
  
}

export default HomeQuickview