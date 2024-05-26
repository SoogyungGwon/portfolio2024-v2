import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import darkDot from '../assets/bg/dark-purple.svg'

// import variables
import { restBase } from '../globals/globalVariables'

const ProjectsPage = () => {
  const restPath = restBase + 'soo-project/?_embed&order=asc'
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
    <main id="project-main">
    { isLoaded ?
    <section className="project-blocks">
      <h1>Projects</h1>
      <p>Hover-over or tap on the blocks.</p>
      <div className="project-item">
        {restData.map(project=>
          <article key={project.id} className="project-scale-box"  id={`project-${project.id}`}>
            
          {/* Project title and tools */}
            <img className="project-dot" src={darkDot} />
            <Link className="project-thumb" to={project.slug}>
            <div className="project-details">
              <h2>{project.title.rendered}</h2>
              <hr></hr>
              <img src={project._embedded['wp:featuredmedia'][0].link} alt="" />
            </div>
          </Link>
        </article>
        )}
      </div>
    </section>
    :
    <Loading />
    }
    </main>
  )
  
}

export default ProjectsPage


