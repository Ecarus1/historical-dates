// import React, { useCallback, useState } from "react";

// import CircleDot from "./circle-dot";

// import "./style.scss"

// function CircleData() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
//   const numberOfDots = 6;
//   const radius = 265;
//   const centerX = 260;
//   const centerY = 259;

//   const step = (2 * Math.PI) / numberOfDots;
//   const angles = [-step, 0, step, step * 2];

//   const handleClick = (index: number | null) => {
//     setActiveIndex(index);
//   }

//   const renderItems = useCallback(() => {
//     let dots = [...Array(numberOfDots)].map((_, index) => {
//       // const index = i + 1;
//       // const angleOffset = ((2 * Math.PI) / 6) * activeIndex;
//       // const x = centerX + radius * Math.cos(index * step );
//       // const y = centerY + radius * Math.sin(index * step );

//       return(
//         <CircleDot
//           key={index}
//           index={index}
//           active={index === activeIndex}
//           activeIndex={activeIndex}
//           onClick={handleClick}
//           centerX={centerX}
//           centerY={centerY}
//           radius={radius}
//           // coords={{x, y}}
//         />
//       )
//     });
//     return dots
//   }, [activeIndex]);

//   return (
//     <div className="circle-data">
//       {renderItems()}
//     </div>
//   );
// }

// export default CircleData;





import React, { useCallback, useState } from "react";

import CircleDot from "./circle-dot";

import "./style.scss"

function CircleData() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const numberOfDots = 6;
  const radius = 265;
  const centerX = 260;
  const centerY = 259;

  const step = (2 * Math.PI) / numberOfDots;
  const angles = [-step, 0, step, step * 2];

  const handleClick = (index: number | null) => {
    setActiveIndex(index);
  }

  const renderItems = useCallback(() => {
    let dots = [...Array(numberOfDots)].map((_, index) => {
      // const index = i + 1;
      // const angleOffset = ((2 * Math.PI) / 6) * activeIndex;
      // const x = centerX + radius * Math.cos(index * step );
      // const y = centerY + radius * Math.sin(index * step );

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
          // coords={{x, y}}
        />
      )
    });
    return dots
  }, [activeIndex]);

  return (
    <div className="circle-data">
      {renderItems()}
    </div>
  );
}

export default CircleData;