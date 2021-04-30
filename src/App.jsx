import React, { createContext, useState } from 'react';
import Intro from './components/intro/Intro';
import Australia from './components/australia/Australia';
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
