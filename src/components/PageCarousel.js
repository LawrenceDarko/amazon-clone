import React from 'react'
import styled from 'styled-components'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/css';
// import "swiper/css/pagination";
import "swiper/css/navigation";

const PageCarousel = () => {
  return (
    <CarouselContainer>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            // nextButton={{paddingBottom: "40px"}}
            // prevButton={{marginBottom: "40px"}}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // style={{ height: "320px", width: "100%", position: 'relative', zIndex: 1, paddingBottom: '200px' }}
            className="mySwiper"
            >
            <SwiperSlide className='swiper-slide'>
                <img src="/Images/slider1.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <img src="/Images/slider2.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <img src="/Images/slider3.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <img src="/Images/slider3.jpg" alt=""/>
            </SwiperSlide>
            
        </Swiper>
    </CarouselContainer>
  )
}

export default PageCarousel

const CarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 500px;
    /* border: 1px solid red; */
    position: relative;

    /* mask the image */
    


`