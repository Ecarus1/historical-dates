import React from "react";
import {ReactComponent as ArrowLeft} from "@/assets/arrow-left.svg";

import "./style.scss";
import "./media.scss";

interface IControlCircleData {
  countDataCircles: number;
  activeIndex: number;
  setActiveIndex: (arg: number) => void;
  setFinish: (agr: boolean) => void;
  finish: boolean;
}

function ControlCircleData({countDataCircles, activeIndex, setActiveIndex, setFinish, finish}: IControlCircleData) {

  const onClickBtnPrev = () => {
    if(activeIndex > 0 && finish) {
      setActiveIndex(activeIndex - 1)
    }
  }

  const onClickBtnNext = () => {
    if(activeIndex < countDataCircles - 1 && finish) {
      setActiveIndex(activeIndex + 1)
    }
  }

  return (
    <div className="control-circle">
      <span className="control-circle__pages">{activeIndex + 1}/{countDataCircles}</span>
      <div className="control-circle__box">
        <button className="control-circle__btn" disabled={activeIndex < 1 ? true : false} onClick={onClickBtnPrev}><ArrowLeft/></button>
        <button className="control-circle__btn control-circle__btn-left" disabled={activeIndex < countDataCircles - 1 ? false : true} onClick={onClickBtnNext}><ArrowLeft/></button>
      </div>
    </div>
  );
}

export default ControlCircleData;