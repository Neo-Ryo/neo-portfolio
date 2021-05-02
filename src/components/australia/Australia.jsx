import React, { useContext, useState, useEffect } from 'react';
import '../global.css';
import { SetMyRender } from '../../App';
import Typist from 'react-typist';

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
      <h1 className='title-area'>Australia!</h1>
      <code className='code code-area'>
        <p className='data'>data: &#123; </p>
        <p className='data-key'>
          name: <span className='data-value'> "Marc"</span>
        </p>
        <p className='data-key'>
          from: <span className='data-value'> "Lyon"</span>
        </p>
        <p className='data-key'>
          loves: &#91;{' '}
          <span className='data-value'> "Mangas", "Video games"</span> &#93;
        </p>
        <Typist>
          <Typist.Delay ms={3500} />
          <p className='data-key'>travels:</p>
          <p className='data-key deep-one'>
            &#123; place: <span className='data-value'> "Australia"</span>,
            timeInYears: <span className='data-value-integer'> 2</span> &#125;
          </p>
        </Typist>

        <p className='data'>&#125;</p>
      </code>
      <button
        className='button-wrapper button-bottom'
        onClick={() => handleUnsubscibeNext()}
      >
        <i className='arrow down'></i>
      </button>
      <button
        className='button-wrapper button-top'
        onClick={() => handleUnsubscibeBack()}
      >
        <i className='arrow up'></i>
      </button>
    </div>
  );
}
