import React, { useContext, useState, useEffect } from 'react';
import '../global.css';
import { SetMyRender } from '../../App';
import avatar from '../../img/me-cartoonized1.png';
import Typist from 'react-typist';

export default function Dev() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );
  const [anime, setAnime] = useState(
    previousPage > 4 ? 'slideInDown' : 'slideInUp'
  );
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const handleUnsubscibeBack = () => {
    setPreviousPage(4);
    setAnime('slideOutDown');
    setTimeout(() => {
      setPage(page - 1);
    }, 1000);
  };
  //   const handleUnsubscibeNext = () => {
  //     setPreviousPage(3);
  //     setAnime('slideOutUp');
  //     setTimeout(() => {
  //       setPage(page + 1);
  //     }, 1000);
  //   };

  return (
    <div className={`wrapper-dev ${anime}`}>
      <h1 className='title title-area'>Web dev!</h1>
      <figure className='avatar-area'>
        <img id='avatar-style' src={avatar} alt='keanu reeves' />
        <figcaption>
          This is me for real now, thanks for your patience &#128523;
        </figcaption>
      </figure>
      <p className='main-text main-text-area'>
        Finally I became a web developper after an intesive but amazing course
        at the WildCodeSchool where I’ve learned JavaScript, React and Node.js
        along with other technologies, libraries and frameworks. I enjoy a lot
        doing this job and I am very interesseted at all the stuffs gravitating
        around this topic wich is roughly computing science to me. I hope you
        enjoyed the ride, feel free to contact me any time. Cheers <br />{' '}
        Kindly, Marc
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
          <span className='data-value'>
            "Mangas", "Video games", "surf", "movies"
            <Typist>
              <Typist.Delay ms={3500} />, "computing sciences"
            </Typist>
          </span>{' '}
          &#93;
        </p>
        <p className='data-key'>travels:</p>
        <p className='data-key deep-one'>
          &#123; place: <span className='data-value'> "Australia"</span>,
          timeInYears: <span className='data-value-integer'> 2</span> &#125;
        </p>
        <p className='data-key'>
          heartRegion: &#91;{' '}
          <span className='data-value'> "Bask country", "Landes"</span>&#93;
        </p>
        <p className='data-key'>
          humor:{' '}
          <span className='data-value'> "Coudn't get any worst &#128517;"</span>
        </p>
        <Typist>
          <Typist.Delay ms={5500} />
          <p className='data-key'>
            job: <span className='data-value'> "Web developper 🔥"</span>
          </p>
          <p className='data-key'>
            isComplete: <span className='data-value-bool'> true</span>
          </p>
        </Typist>
        <p className='data'>&#125;</p>
      </code>
      <p className='info-text'>
        Did you know that Matrix computer characters are actually reciepes in
        japanese? Kinda fun no?
      </p>
      <button
        className='button-wrapper button-top'
        onClick={() => handleUnsubscibeBack()}
      >
        <i className='arrow up'></i>
      </button>
      {/* <button
        className='button-wrapper button-bottom'
        onClick={() => handleUnsubscibeNext()}
      >
        <i className='arrow down'></i>
      </button> */}
    </div>
  );
}
