import React, { useContext, useEffect, useState } from 'react';
import '../global.css';
import myAvatar from '../../img/Lgif.gif';
import ss2 from '../../img/ss2.gif';
import { SetMyRender } from '../../App';
import Typist from 'react-typist';

export default function BackToLyon() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );
  const [avatar, setAvatar] = useState(myAvatar);

  const [anime, setAnime] = useState(
    previousPage > 2 ? 'slideInDown' : 'slideInUp'
  );

  const handleUnsubscibeBack = () => {
    setPreviousPage(2);
    setAnime('slideOutDown');
    setTimeout(() => {
      setPage(page - 1);
    }, 1000);
  };
  const handleUnsubscibeNext = () => {
    setPreviousPage(2);
    setAnime('slideOutUp');
    setTimeout(() => {
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div className={`wrapperDark ${anime}`}>
      <h1 className='title title-area-lyon' style={{ textAlign: 'center' }}>
        I came back home
      </h1>
      <h3 className='sub-title-area'>
        But after a few month I decided to move to...
      </h3>

      <button
        className='button-wrapper button-top'
        onClick={() => handleUnsubscibeBack()}
      >
        <i className='arrow up'></i>
      </button>
      <button
        className='button-wrapper button-bottom'
        onClick={() => handleUnsubscibeNext()}
      >
        <i className='arrow down'></i>
      </button>
    </div>
  );
}
