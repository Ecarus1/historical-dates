import React from "react";

import "./style.scss";
import "./media.scss";
import { DataTimeLine } from "@/interface";

interface ISlide {
  item: DataTimeLine;
}

function Slide({item}: ISlide) {
  return (
    <div className="slide">
      <span className="slide__title">{item.year}</span>
      <p className="slide__text">{item.text}</p>
    </div>
  );
}

export default Slide;