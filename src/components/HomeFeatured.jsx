import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

// import variables
import { restBase } from '../globals/globalVariables'

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HomeFeatured = () => {
  const restPath = restBase + 'pages/10?_embed'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
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
    <>
    { isLoaded ?
      (width < 850) ?
      // Mobile view
      <section className="m-featured" id="m-featured">
        <div className="featured-wrapper">
          <h2>Featured</h2>
          <Swiper
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >

            {/* 1st Featured */}
            <SwiperSlide className='featured-container'>
              <div className='featured-text-block'>
                <Link to={`/projects/${restData._embedded['acf:post'][0].slug}`}>
                  <h3 className='featured-name'>
                    {restData._embedded['acf:post'][0].title.rendered}
                  </h3>
                  <div className='featured-tools'>
                    {restData._embedded['acf:post'][0].acf.project_tools}
                  </div>
                </Link>
                <Link to={`${restData._embedded['acf:post'][0].acf.project_video}`} target="_blank">
                  <button className="sneak-peek">Sneak Peek</button>
                </Link>
                <Link to={`/projects/${restData._embedded['acf:post'][0].slug}`}>
                  <button className="see-more">See More</button>
                </Link>
              </div>
            </SwiperSlide>


            {/* 2nd Featured */}
            <SwiperSlide className='featured-container'>
              <div className='featured-text-block'>
                <Link to={`/projects/${restData._embedded['acf:post'][1].slug}`}>
                  <h3 className='featured-name'>
                    {restData._embedded['acf:post'][1].title.rendered}
                  </h3>
                  <div className='featured-tools'>
                    {restData._embedded['acf:post'][1].acf.project_tools}
                  </div>
                </Link>
                <Link to={`${restData._embedded['acf:post'][1].acf.project_video}`} target="_blank">
                  <button className="sneak-peek">Sneak Peek</button>
                </Link>
                <Link to={`/projects/${restData._embedded['acf:post'][1].slug}`}>
                  <button className="see-more">See More</button>
                </Link>
              </div>
            </SwiperSlide>


            {/* 3rd Featured */}
            <SwiperSlide className='featured-container'>
            <div className='featured-text-block'>
              <Link to={`/projects/${restData._embedded['acf:post'][2].slug}`}>
                <h3 className='featured-name'>
                  {restData._embedded['acf:post'][2].title.rendered}
                </h3>
                <div className='featured-tools'>
                    {restData._embedded['acf:post'][2].acf.project_tools}
                </div>            
              </Link>
              <Link to={`${restData._embedded['acf:post'][2].acf.project_video}`} target="_blank">
                <button className="sneak-peek">Sneak Peek</button>
              </Link>
              <Link to={`/projects/${restData._embedded['acf:post'][2].slug}`}>
                <button className="see-more">See More</button>
              </Link>
            </div>
            </SwiperSlide>


          </Swiper>
        </div>
      </section>
      :
      // Desktop (width >= 850) view
      <section className="featured" id="featured">
        <h2>Featured</h2>

        <div className="featured-wrapper">
          {/* 1st Featured */}
          <article className='featured-container'>
            <div className='featured-text-block'>
              <Link to={`/projects/${restData._embedded['acf:post'][0].slug}`}>
                <h3 className='featured-name'>
                  {restData._embedded['acf:post'][0].title.rendered}
                </h3>
                <div className='featured-tools'>
                  {restData._embedded['acf:post'][0].acf.project_tools}
                </div>
              </Link>
              <div className='feature-button-container'>
                <Link to={`${restData._embedded['acf:post'][0].acf.project_video}`} target="_blank">
                  <button className="sneak-peek">Sneak Peek</button>
                </Link>
                <Link to={`/projects/${restData._embedded['acf:post'][0].slug}`}>
                  <button className="see-more">See More</button>
                </Link>
              </div>
            </div>
          </article>

          {/* 2st Featured */}
          <article className='featured-container'>
            <div className='featured-text-block'>
                <Link to={`/projects/${restData._embedded['acf:post'][1].slug}`}>
                  <h3 className='featured-name'>
                    {restData._embedded['acf:post'][1].title.rendered}
                  </h3>
                  <div className='featured-tools'>
                    {restData._embedded['acf:post'][1].acf.project_tools}
                  </div>
                </Link>
                  <div className='feature-button-container'>
                  <Link to={`${restData._embedded['acf:post'][1].acf.project_video}`} target="_blank">
                    <button className="sneak-peek">Sneak Peek</button>
                  </Link>
                  <Link to={`/projects/${restData._embedded['acf:post'][1].slug}`}>
                    <button className="see-more">See More</button>
                  </Link>
                </div>
              </div>
          </article>

        {/* 3st Featured */}        
          <article className='featured-container'>
            <div className='featured-text-block'>
              <Link to={`/projects/${restData._embedded['acf:post'][2].slug}`}>
                <h3 className='featured-name'>
                  {restData._embedded['acf:post'][2].title.rendered}
                </h3>
                <div className='featured-tools'>
                  {restData._embedded['acf:post'][2].acf.project_tools}
                </div>
              </Link>
              <div className='feature-button-container'>
                <Link to={`${restData._embedded['acf:post'][2].acf.project_video}`} target="_blank">
                  <button className="sneak-peek">Sneak Peek</button>
                </Link>
                <Link to={`/projects/${restData._embedded['acf:post'][2].slug}`}>
                  <button className="see-more">See More</button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    :
    <Loading />
    }
    </>
  )
  
}

export default HomeFeatured
