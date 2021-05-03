import React, { useContext, useEffect, useState } from 'react';
import '../global.css';
import { SetMyRender } from '../../App';

export default function Projects() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );

  const [anime, setAnime] = useState('slideInRight');

  const handleUnsubscibe = () => {
    setPreviousPage(5);
    setAnime('slideOutRight');
    setTimeout(() => {
      setPage(page - 1);
    }, 1000);
  };

  return (
    <div className={`wrapperDark ${anime}`}>
      <h1 className='title title-area'>Things I've worked on</h1>

      <button
        className='button-wrapper button-left'
        onClick={() => handleUnsubscibe()}
      >
        <i className='arrow left'></i>
      </button>
    </div>
  );
}
