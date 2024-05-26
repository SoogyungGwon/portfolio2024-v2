import React from 'react'

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectSingleGallery = ( { restData } ) => {

    return (

        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            >

          {restData[0].acf['project_mock-ups'].mockup1 &&
            <SwiperSlide>
              <img src={restData[0].acf['project_mock-ups'].mockup1} />
            </SwiperSlide>
          }
          {restData[0].acf['project_mock-ups'].mockup2 &&
            <SwiperSlide>
            <img src={restData[0].acf['project_mock-ups'].mockup2} />
            </SwiperSlide>
          }
        </Swiper>
        )
    }

    export default ProjectSingleGallery