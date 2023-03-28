import React, { useCallback, useEffect, useState } from "react";

import CircleDot from "./circle-dot";

import "./style.scss";
import "./media.scss";

interface ICircleData {
  countDataCircles: number;
  setActiveIndex: (arg: number) => void;
  activeIndex: number;
  children: React.ReactNode;
  setFinish: (agr: boolean) => void;
  finish: boolean;
}

function CircleData({countDataCircles, setActiveIndex, activeIndex, setFinish, finish, children}: ICircleData) {
  // const [activeIndex, setActiveIndex] = useState<number | null>(5);
  // const [finish, setFinish] = useState(true);
  
  // const numberOfDots = 6;
  const radius = 265;
  const centerX = 265;
  const centerY = 265;

  const _STEP = (2 * Math.PI) / countDataCircles;

  const handleClick = (index: number) => {
    setActiveIndex(index);
  }

  const changeFinish = (arg: boolean) => {
    setFinish(arg);
  }

  useEffect(() => {
    setFinish(false);
  }, [activeIndex]);

  const renderItems = useCallback(() => {
    let dots = [...Array(countDataCircles)].map((_, index) => {
      return(
        <CircleDot
          key={index}
          index={index}
          active={index === activeIndex}
          activeIndex={activeIndex}
          onClick={handleClick}
          centerX={centerX}
          centerY={centerY}
          radius={radius}
          _STEP={_STEP}
          finish={finish}
          changeFinish={changeFinish}
        />
      )
    });
    return dots
  }, [activeIndex, finish]);

  return (
    <div className="circle-data">
      {children}

      <div className="circle-data__circle">
        {renderItems()}
      </div>
    </div>
  );
}

export default CircleData;