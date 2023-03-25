import React from "react";
import "./style.scss";

interface ITitlePage {
  title: string
}

function TitlePage({title}: ITitlePage) {
  return (  
    <div className="title-page">
      <div className="title-page__line"></div>
      <h1 className="title-page__title">{title}</h1>
    </div>
  );
}

export default TitlePage;