import React, { useContext, useState, useEffect } from 'react';
import '../global.css';
import { SetMyRender } from '../../App';
import avatar from '../../img/Lgif.gif';
import ozzie from '../../img/ozzie.png';
import Typist from 'react-typist';

export default function Australia() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );
  const [anime, setAnime] = useState(
    previousPage > 1 ? 'slideInDown' : 'slideInUp'
  );
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const handleUnsubscibeBack = () => {
    setPreviousPage(1);
    setAnime('slideOutDown');
    setTimeout(() => {
      setPage(page - 1);
    }, 1000);
  };
  const handleUnsubscibeNext = () => {
    setPreviousPage(1);
    setAnime('slideOutUp');
    setTimeout(() => {
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div className={`wrapper-ozzie ${anime}`}>
      <h1 className='title-area'>Australia!</h1>
      <div className='avatar-area'>
        <img id='avatar-style' src={avatar} alt='L from death note' />
        <p>
          Ok ok, you got me, this isn't me but a very famous manga character,
          can you gess who is he{' '}
          <button
            className='button-guess'
            onClick={() => setToggleAnswer(!toggleAnswer)}
          >
            ?
          </button>
          <span className={toggleAnswer ? 'answer-show' : 'answer-hide'}>
            He is L, the best detective ever (equal with Sherlock Holmes)
          </span>
        </p>
      </div>
      <img src={ozzie} alt='austalian floating flag' className='ozzie-flag' />
      <p className='main-text main-text-area'>
        Yeah, been in australia! One of the greatest time of my life, met so
        many amazing people, seen so many places, learned and loved english,
        surf and culture. Well great time, but came a moment where I had to come
        back... And guess what?
      </p>
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
      <p className='info-text'>
        While Koalas sleep more than 20 hours a day, you have more chance to get
        killed by Jelly fish than, sharks, snakes and crocodile combined!
      </p>
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
