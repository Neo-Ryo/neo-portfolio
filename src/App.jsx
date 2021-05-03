import React, { createContext, useState } from 'react';
import Intro from './components/intro/Intro';
import Australia from './components/australia/Australia';
import BackToLyon from './components/backToLyon/BackToLyon';
import Biarritz from './components/biarritz/Biarritz';
import Dev from './components/developper/Dev';
import './App.css';

export const SetMyRender = createContext(0);

function App() {
  const [page, setPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);

  const switchRendering = (key) => {
    switch (key) {
      case 0:
        return <Intro />;
      case 1:
        return <Australia />;
      case 2:
        return <BackToLyon />;
      case 3:
        return <Biarritz />;
      case 4:
        return <Dev />;

      default:
        break;
    }
  };

  return (
    <SetMyRender.Provider
      value={{ page, setPage, previousPage, setPreviousPage }}
    >
      <div className='App'>{switchRendering(page)}</div>
    </SetMyRender.Provider>
  );
}

export default App;
