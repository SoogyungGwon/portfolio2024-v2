import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

// import variables
import { restBase } from '../globals/globalVariables'

const HomeCurious = () => {
  const restPath = restBase + 'pages/145'
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
    <section className="curious-about" id="curious-about-home">
      <h2>Are You Curious About...</h2>
      <div className="curious-tags">
        {restData.acf.curious_block_tags.map(tag => (
          <span key={tag.curious_tag}className="curious-tag">{tag.curious_tag}
          </span>
        ))}
      </div>
    </section>
    :
    <Loading />
    }
    </>
  )
  
}

export default HomeCurious