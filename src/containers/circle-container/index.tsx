import React, {useState} from "react";

import CircleData from "components/circle-data";
import YearTitle from "components/year-title";
import ControlCircleData from "components/control-circle-data";
import SwiperInfo from "components/swiper-info";
import { data } from "@/data";
import { DataModel } from "@/interface";
import RadioCircle from "components/radio-circle";

function CircleContainer() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [finish, setFinish] = useState(true);

  const countDataCircles = Object.keys(data).length;
  const {years, timeLine} = (data as DataModel)[activeIndex];

  return (
    <>
      <CircleData 
        countDataCircles={countDataCircles}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        setFinish={setFinish}
        finish={finish}>
        <YearTitle years={years}/>
      </CircleData>
      <ControlCircleData 
        countDataCircles={countDataCircles}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setFinish={setFinish}
        finish={finish}/>
      <SwiperInfo timeLine={timeLine} finish={finish}/>
      <RadioCircle 
        countDataCircles={countDataCircles} 
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex}/>
    </>
  );
}

export default CircleContainer;