import React from "react";

import "./style.scss";

interface IBoxContent {
  children: React.ReactNode;
}

function BoxContent({children}: IBoxContent) {
  return (
    <div className="box-content">
      {children}
      {/* <div className="box-content__horizont"></div>
      <div className="box-content__vertical"></div> */}
    </div>
  );
}

export default BoxContent;