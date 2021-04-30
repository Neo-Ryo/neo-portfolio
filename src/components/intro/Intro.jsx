import React, { useContext, useEffect, useState } from 'react';
import '../global.css';
import { SetMyRender } from '../../App';

export default function Intro() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );

  const [anime, setAnime] = useState(
    previousPage > 0 ? 'slideInDown' : 'fadeIn'
  );

  const handleUnsubscibe = () => {
    setAnime('slideOutUp');
    setTimeout(() => {
      setPage(page + 1);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      setPreviousPage(0);
    };
  }, []);

  return (
    <div className={`wrapperDark ${anime}`}>
      <h1 className='title'>Intro</h1>
      <button
        className='button-wrapper button-bottom'
        onClick={() => handleUnsubscibe()}
      >
        <i className='arrow down'></i>
      </button>
    </div>
  );
}
