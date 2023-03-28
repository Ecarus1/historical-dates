import React, {useCallback} from "react";

import "./style.scss";
import "./media.scss";

interface IRadioCircle {
  countDataCircles: number;
  activeIndex: number;
  setActiveIndex: (arg: number) => void;
}

function RadioCircle({countDataCircles, activeIndex, setActiveIndex}: IRadioCircle) {

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveIndex(Number(e.target.id));
  }

  const renderItems = useCallback(() => {
    let items = [];

    for(let i = 0; i < countDataCircles; i++) {
      items.push(<input className="radio-circle__radio" type="radio" value='' key={i} id={`${i}`} onChange={onChangeRadio} checked={i === activeIndex}/>);
    }

    return items;
  }, [activeIndex])
  return (
    <div className="radio-circle" >
      {renderItems()}
    </div>
  );
}

export default RadioCircle;