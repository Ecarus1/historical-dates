import React, {useRef} from "react";
import {useAnimationFrame} from "framer-motion";

import "./style.scss";

type Point = {
  x: number;
  y: number;
};

type Rectangle = {
  minX: number,
  minY: number,
  maxX: number,
  maxY: number,
};

interface ICircleDot {
  index: number;
  active: boolean;
  activeIndex: number | null;
  onClick: Function;
  centerX: number;
  centerY: number;
  radius: number;
  _STEP: number;
  finish: boolean;
  changeFinish: (arg: boolean) => void;
}

function CircleDot({index, active, activeIndex, onClick, centerX, centerY, radius, _STEP, finish, changeFinish}: ICircleDot) {
  const pos = useRef({
    x: centerX + radius * Math.cos(index * _STEP ),
    y: centerY + radius * Math.sin(index * _STEP )
  });

  const rectangleArea = { minX: 385.5, minY: 27.5033, maxX: 397.5, maxY: 35.5033 };

  const dotRef = useRef(null);
  const targetAngle = useRef(0);

  const handleClick = () => {
    if(finish && !active) {
      onClick(index);
      changeFinish(false);
    }
  }

  const angleForPosition = (index: number, step: number): number => {
    return index * step;
  }

  const isPointInProtectedArea = (point: Point, area: Rectangle) => {
    const { x, y } = point;
    const { minX, minY, maxX, maxY } = area;
    
    return (x >= minX && x <= maxX && y >= minY && y <= maxY);
  }

  useAnimationFrame((time, delta) => {
    if(!finish) {
      targetAngle.current += -delta * 0.0028;
      const angle = angleForPosition(index, _STEP) + targetAngle.current;
      pos.current.x = centerX + radius * Math.cos(angle);
      pos.current.y = centerY + radius * Math.sin(angle);

      if(active && isPointInProtectedArea(pos.current, rectangleArea)) {
        changeFinish(true);
      }
    }

    const {x, y} = pos.current;
    
    if(dotRef.current) {
      (dotRef.current as HTMLDivElement).style.top = `${y}px`;
      (dotRef.current as HTMLDivElement).style.left = `${x}px`
    }
  });

  return (
    <div onClick={handleClick} className={`circle-dot ${active && 'circle-dot_active'}`} ref={dotRef}>
      {index + 1}
    </div>
  );
}

export default React.memo(CircleDot);