import React from 'react'
import { useState, useEffect } from 'react'

const ProjectSingleLightbox = ( {restData } ) => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    
      }, [])

    return (
      (!restData[0].acf['project_mock-ups'].mockup1 && !restData[0].acf['project_mock-ups'].mockup2) ? null : (
        <section className="project-single-image-container">
          {restData[0].acf['project_mock-ups'].mockup1 && (
            <img src={restData[0].acf['project_mock-ups'].mockup1} alt="Mockup 1" />
          )}
          {restData[0].acf['project_mock-ups'].mockup2 && (
            <img src={restData[0].acf['project_mock-ups'].mockup2} alt="Mockup 2" />
          )}
        </section>
      )
    )
}

export default ProjectSingleLightbox