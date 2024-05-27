import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

// import variables
import { restBase } from '../globals/globalVariables'

const AboutSkillset = () => {
  const restPath = restBase + 'soo-project-category?orderby=name&order=asc&per_page=100'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)

  const handleSkillIcon = () => {

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
    <section className="about-skillset" id="about-skillset">
      <div className="about-skillset-heading">
        <h2>Skillset</h2>
        {/* <button onClick={handleSkillIcon}>with icon</button> */}
      </div>
      <div className="skillset-tags">
        {restData.map((tag) => (
            <span key={tag.id} className="skillset-tag">{tag.name}</span>
          ))}
      </div>
      <div className="skillset-image-tags">
        {restData.map((tagicon) => (
            <img src={tagicon.acf.skillset_icons.skillset_icons} key={tagicon.id} className="skillset-tag" />
          ))}
      </div>
    </section>
    :
    <Loading />
    }
    </>
  )
  
}

export default AboutSkillset