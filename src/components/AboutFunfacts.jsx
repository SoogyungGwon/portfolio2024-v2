import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

// import variables
import { restBase } from '../globals/globalVariables'

// import components
import Collapsible from './Collapsible'

const AboutFunfacts = () => {
  const restPath = restBase + 'soo-fun-fact/?_embed&orderby=title&order=asc'
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
    <section className="about-blocks">
      <h2>Fun Facts About Me</h2>
      <div className="funfact-item">        
        {restData.map((funfact, index) =>
        <article 
          key={funfact.id} 
          id={`funfact-${funfact.slug}`}>
          <Collapsible 
            title={funfact.title.rendered} 
            pcontent={{__html:funfact.content.rendered}} 
            presetOpen={index === 0 ? true : false}/>
        </article>
        )}
      </div>
    </section>
    :
    <Loading />
    }
    </>
  )
  
}

export default AboutFunfacts


