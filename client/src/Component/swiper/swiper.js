import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination,Autoplay, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "./swiper.scss"

export default Swiper1=> {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      breakpoints={{
        // when window width is >= 640px
        640: {
            width: 600,
            slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
        },
    }}
    autoplay={{
        delay: 11111111111111,
    }}
    loop={true}
    pagination={{
        clickable: true
    }}

    modules={[Pagination, Autoplay,]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    
    </Swiper>
  );
};