import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'

// import variables
import { restBase } from '../globals/globalVariables'

const ProjectSingleOther = ( {slug} ) => {
  const restPath = restBase + `soo-project?_embed`
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
    <section className="other-projects">
      <h2>Other Projects</h2>
      <div className="other-project-item">
        {restData.map((project) => (
          project.slug !== slug ?
          <Link key={project.id} to={`/projects/${project.slug}`}>
            <article id={`project-${project.id}`}>
                  <div className="other-project-link">{project.title.rendered}</div>
            </article>
          </Link>
          :
          null
        ))}
      </div>
    </section>
    :
    <Loading />
    }
  </>
  )
}

export default ProjectSingleOther