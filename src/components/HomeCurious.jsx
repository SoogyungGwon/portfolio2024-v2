import React from 'react'
import { useState, useEffect } from 'react'
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
          <a href={tag.curious_tag_link['url']} key={tag.curious_tag}className="curious-tag">{tag.curious_tag}
          </a>
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