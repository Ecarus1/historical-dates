import React, {useState, useRef, useEffect} from "react";
import {motion, useAnimationFrame} from "framer-motion";

import "./style.scss";

interface Position {
  x: number;
  y: number;
}

interface ICircleDot {
  index: number;
  active: boolean;
  activeIndex: number | null;
  onClick: Function;
  centerX: number;
  centerY: number;
  radius: number;
  // coords: {
  //   x: number;
  //   y: number
  // };
}

function CircleDot({index, active, activeIndex, onClick, centerX, centerY, radius}: ICircleDot) {
  const _STEP = ((2 * Math.PI) / 6);
  const [position, setPosition] = useState({
    x: centerX + radius * Math.cos(index * _STEP ),
    y: centerY + radius * Math.sin(index * _STEP )
  });
  const dotRef = useRef(null);
  let angle = 0;

  const handleClick = () => {
    onClick(active ? null : index);

    // const targetAngle = index * _STEP;
    // const angle = angleForPosition(index, _STEP) + targetAngle;
    // const clonePosition = Object.assign({}, position);
    // clonePosition.x = centerX + radius * Math.cos(angle);
    // clonePosition.y = centerY + radius * Math.sin(angle);

    // setPosition(clonePosition);
  }

  const angleForPosition = (index: number, step: number): number => {
    return index * step;
  }

  const distance = (point1: Position, point2: Position): number => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
  
    return Math.sqrt(dx * dx + dy * dy);
  }

  useEffect(() => {
    // console.log(index, position)
  }, [position]);
  // const posY = centerY + radius * Math.sin(step * index)+"px";
  // const posX = centerX + radius * Math.cos(step * index)+"px"
  // let angle = 0;

  useAnimationFrame((time, delta) => {
    // if(dotRef.current) {
    //   angle += 0.0003 * delta;
    //   const x = centerX + radius * Math.cos(-angle + index * _STEP);
    //   const y = centerY + radius * Math.sin(-angle + index * _STEP);
    //   (dotRef.current as HTMLDivElement).style.top = `${y}px`;
    //   (dotRef.current as HTMLDivElement).style.left = `${x}px`;
    // }

    let newPosition = Object.assign({}, position);

    if(activeIndex !== null) {
      angle += 0.003 * delta;
      newPosition.x = centerX + radius * Math.cos(-angle + index * _STEP);
      newPosition.y = centerY + radius * Math.sin(-angle + index * _STEP);
    } else {
      // newPosition = Object.assign({}, position)
    }
    
    setPosition({...newPosition});

    const {x, y} = newPosition;

    if(dotRef.current) {
      (dotRef.current as HTMLDivElement).style.top = `${y}px`;
      (dotRef.current as HTMLDivElement).style.left = `${x}px`
    }


    // let clonePosition = Object.assign({}, position);

    // if(activeIndex !== null) {
    //   const targetAngle = activeIndex * _STEP;
    //   const angle = angleForPosition(index, _STEP) + targetAngle;
    //   clonePosition.x = centerX + radius * Math.cos(angle);
    //   clonePosition.y = centerY + radius * Math.sin(angle);

    //   if (distance(position, clonePosition) < 1) {
    //     clonePosition = {...position};
    //     onClick(null);
    //   }
    // } else {
    //   const angle = angleForPosition(index, _STEP) + 0.0003 * delta;
    //   clonePosition.x = centerX + radius * Math.cos(angle);
    //   clonePosition.y = centerY + radius * Math.sin(angle);
    // }

    // setPosition(clonePosition);

    // const {x, y} = clonePosition;
    
    // if(dotRef.current) {
    //   (dotRef.current as HTMLDivElement).style.top = `${y}px`;
    //   (dotRef.current as HTMLDivElement).style.left = `${x}px`
    // }
  });

  return (
    // <motion.div
    //   className="circle-dot"
    //   style={{
    //     x: coords.x,
    //     y: coords.y,
    //     zIndex: active ? 1 : 0
    //   }}
    //   onClick={handleClick}
    //   animate={{
    //     // x: coords.x,
    //     y: active ? -75 : coords.y,
    //     transition: {
    //       duration: 2,
    //       ease: "linear"
    //       // type: "spring",
    //       // stiffness: 200,
    //       // damping: 20
    //     }
    //   }}
    //   layout
    //   layoutId={`dot-${index}`}
    // > {index} </motion.div>
    <div onClick={handleClick} className="circle-dot" ref={dotRef}> 
      {index} 
    </div>
  );
}

export default CircleDot;