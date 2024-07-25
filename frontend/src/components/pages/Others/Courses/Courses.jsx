import React, { useState, useRef } from 'react';
import { CourseData } from '../../../../Context/CourseContext';
import Footer from '../../../footer/Footer';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './courses.css';
import { Navigation, Autoplay, EffectCards } from 'swiper/modules';
import CourseCard from './CourseCard';

export default function Courses() {
  const { courses } = CourseData();
  const swiperRef = useRef(null);

  const handleModalOpen = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleModalClose = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <>
      <Typography
        variant="h4"
        align="left"
        gutterBottom
        fontFamily={'Rajdhani'}
        fontWeight={700}
        color='#686D76'
        sx={{ m: 4 }}
      >
        Available Courses -
      </Typography>
      <div style={{ padding: '10px', backgroundColor: "#EEEEEE" }}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={40}
          effect='slides'
          cardsEffect={{
            slideShadows: true,
            perspective: 1000,
            rotate: 50
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[EffectCards, Navigation, Autoplay]}
          className="mySwiper"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index} style={{ border: '20px solid #DDDDDD', borderRadius: "15px" }}>
              <CourseCard course={course} onModalOpen={handleModalOpen} onModalClose={handleModalClose} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
}
