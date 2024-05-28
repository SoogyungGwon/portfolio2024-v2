import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

// import image
import darkDot from '../assets/bg/dark-purple.svg'

// import variables
import { restBase } from '../globals/globalVariables'

// import components
import ProjectsOther from '../components/ProjectSingleOther'
import Collapsible from '../components/Collapsible'
import ProjectSingleGallery from '../components/ProjectSingleGallery'
import ProjectSingleLightbox from '../components/ProjectSingleLightbox'


const ProjectSinglePage = () => {
  const { slug } = useParams();
  const restPath = restBase + `soo-project?_embed&slug=` + slug
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

    useEffect(() => {
    scrollToTop();
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);

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

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [restPath])

  return (
    <main id="project-single-main">
    { isLoaded ?
    <>
    <section className="project-single">
        {restData.map(project=>
        <article key={project.id} id={`project-${project.id}`} className="project-single-item">
          {/* Text block starts */}
          <div className="project-info-wrapper">
            <img className="project-dot" src={darkDot} />
            <h1>{project.title.rendered}</h1>
            <div className="project-links">
              <a className="git-hub-link" href={project.acf.project_links.git_link.url} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
              </a>
              <a className="live-site-link" href={project.acf.project_links.live_link.url} target="_blank">
                <svg width="29px" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 8.399h-18v11.6c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-18-1.4h18v-3c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1z" fillRule="nonzero"/></svg>
              </a>
            </div>

            <div className="project-tools">
              <h2>Tools</h2>
                <section className="project-tool-tags">
                {project._embedded['wp:term'][0].map((tax) => (
                  tax.id == 2 ?
                  <div key={tax.id} className="project-tool-tag" hidden>
                    {tax.name}
                  </div>
                  :
                  <div key={tax.id} className="project-tool-tag">
                    {tax.name}
                  </div>
                ))}
            </section>
            </div>
          </div> 

          <img className="project-single-mockup" src={project._embedded['wp:featuredmedia'][0].link} alt="" />

          <div className="project-summary">
            <h2>Summary</h2>
            <p>{project.acf.project_summary}</p>
          </div>
          {/* Upper text box END */}

          {/* Image swiper for mobile view, Image Lightbox for desktop view */}
          { width < 850?
            <ProjectSingleGallery restData={ restData }/>
            :
            <ProjectSingleLightbox restData={ restData } />
          } 

          {/* Reflection and Procoess */}
          <div className="project-story-wrapper">
            <article className="project-reflection">
              <Collapsible title="Reflection" pcontent={{__html:project.acf.project_reflection}} presetOpen={true}/>
            </article>
            <article className="project-process">
              <Collapsible title="Process" pcontent={{__html:project.content.rendered}} presetOpen={false}/>
            </article>
          </div>

        </article>
        )}
    </section>

    {/* Other Proejct section */}
      <ProjectsOther slug={slug} />
    </>
    :
    <Loading />
    }
    </main>
  )
  
}

export default ProjectSinglePage


