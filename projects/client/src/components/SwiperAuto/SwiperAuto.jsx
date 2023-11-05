import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperAuto = () => {
  return (
    <div className="w-[616px] h-[464px] mt-[32px]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="h-full w-full shadow-md rounded-2xl "
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperAuto;
