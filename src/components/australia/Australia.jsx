import React, { useContext, useState, useEffect } from 'react';
import '../global.css';
import { SetMyRender } from '../../App';

export default function Australia() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );
  const [anime, setAnime] = useState('slideInUp');
  const handleUnsubscibeNext = () => {
    setAnime('slideOutUp');
    setTimeout(() => {
      setPage(page + 1);
    }, 1000);
  };

  const handleUnsubscibeBack = () => {
    setAnime('slideOutDown');
    setPreviousPage(1);
    setTimeout(() => {
      setPage(page - 1);
    }, 1000);
  };
  //

  return (
    <div className={`wrapperDark ${anime}`}>
      <h1>Australia!</h1>
      <button onClick={() => handleUnsubscibeNext()}>next</button>
      <button onClick={() => handleUnsubscibeBack()}>back</button>
    </div>
  );
}
