import React from 'react';
import BoxContent from 'components/box-content';
import TitlePage from 'components/title-page';
// import CircleData from 'components/circle-data';
import CircleContainer from '@/containers/circle-container';
import "./style.scss";

function App() {
  return(
    <BoxContent>
      <TitlePage title={"Исторические даты"}/>
      <CircleContainer/>
    </BoxContent>
  )
};

export default App;