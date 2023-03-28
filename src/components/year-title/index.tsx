import React, {useEffect, useState, useRef} from "react";
import CountUp from "react-countup";
import usePrevValue from "@/hooks/usePrevValue";

import "./style.scss";
import "./media.scss";
import { DataYears } from "@/interface";

interface IYearTitle {
  years: DataYears;
}

function YearTitle({years}: IYearTitle) {
  const prevYears = usePrevValue(years);

  return (
    <div className="year-title">
      <CountUp start={prevYears?.from} end={years.from} separator="" className="year-title__from"/>
      <CountUp start={prevYears?.before} end={years.before} separator="" className="year-title__before"/>
    </div>
  );
}

export default React.memo(YearTitle);