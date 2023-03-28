import React, { useCallback, useState } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Pagination, Navigation, EffectCoverflow } from "swiper";

import {ReactComponent as ArrowBlue} from "@/assets/arrow-blue.svg";
import Slide from "./slide";
import { DataTimeLine } from "@/interface";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.scss";
import "./media.scss";

interface ISwiperInfo {
  timeLine: DataTimeLine[];
  finish: boolean;
}

function SwiperInfo({timeLine, finish}: ISwiperInfo) {
  const [swiperParams, setSwiperParams] = useState(
    {
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        200: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
      },
    }
  );

  const renderSlide = useCallback(() => {
    let slides = timeLine.map((item: DataTimeLine, index) => 
      <SwiperSlide key={index}><Slide item={item}/></SwiperSlide>
    );
    return slides
  }, [timeLine]);

  return (
    <div className={`slider ${!finish ? 'slider__opacity' : ''}`}>
      <Swiper
        {...swiperParams}
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          nextEl: '.slider__button-next',
          prevEl: '.slider__button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, FreeMode, EffectCoverflow]}
        className='slider__mySwiper'
      >
        {renderSlide()}
      </Swiper>

      <button className="slider__button-prev" type="button">
        <ArrowBlue/>
      </button>

      <button className="slider__button-next" type="button">
        <ArrowBlue/>
      </button>
    </div>
  );
}

export default React.memo(SwiperInfo);