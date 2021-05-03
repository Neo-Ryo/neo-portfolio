import React, { useContext, useState, useEffect } from 'react';
import '../global.css';
import { SetMyRender } from '../../App';
import myAvatar from '../../img/keanu.jpg';
import keanuBruce from '../../img/keanu-bruce.gif';
import baskCross from '../../img/croixbasqueblanche.png';
import Typist from 'react-typist';

export default function Biarritz() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );
  const [anime, setAnime] = useState(
    previousPage > 3 ? 'slideInDown' : 'slideInUp'
  );
  const [avatar, setAvatar] = useState(myAvatar);
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const handleUnsubscibeBack = () => {
    setPreviousPage(3);
    setAnime('slideOutDown');
    setTimeout(() => {
      setPage(page - 1);
    }, 1000);
  };
  const handleUnsubscibeNext = () => {
    setPreviousPage(3);
    setAnime('slideOutUp');
    setTimeout(() => {
      setPage(page + 1);
    }, 1000);
  };

  return (
    <div className={`wrapper-biarritz ${anime}`}>
      <h1 className='title-area'>Biarritz!</h1>
      <figure className='avatar-area'>
        <img
          onMouseEnter={() => setAvatar(keanuBruce)}
          onMouseLeave={() => setAvatar(myAvatar)}
          id='avatar-style'
          src={avatar}
          alt='keanu reeves'
        />
        <figcaption>
          Alright... this is me now. Got ya! This is the legendary Neo from the
          movie Matrix ^^ did you recognize him?
        </figcaption>
      </figure>
      <img
        src={baskCross}
        alt='bask cross'
        className='ozzie-flag'
        width='200'
      />
      <p className='main-text main-text-area'>
        Yep, got all my stuffs again in a backpack and go. Back then it was only
        about surfing, but now I feel more than ever attached to that part of
        France wich is beautifull. And for about 10 years, I’worked in a lot of
        places and different jobs, such as, construction, electrician, surfboard
        maker, truck driver, swimming p.... Yeah, well, I told you a lot, but it
        is finally in 2019 that I decided to finally work in something that I
        love....
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
            {' '}
            "Mangas", "Video games",
            <Typist>
              <Typist.Delay ms={3500} />
              "surf", "movies"
            </Typist>
          </span>{' '}
          &#93;
        </p>
        <p className='data-key'>travels:</p>
        <p className='data-key deep-one'>
          &#123; place: <span className='data-value'> "Australia"</span>,
          timeInYears: <span className='data-value-integer'> 2</span> &#125;
        </p>
        <Typist>
          <Typist.Delay ms={5500} />
          <p className='data-key'>
            heartRegion: &#91;{' '}
            <span className='data-value'> "Bask country", "Landes"</span>&#93;
          </p>
          <p className='data-key'>
            humor: <span className='data-value'> "Coudn't get any worst"</span>
          </p>
        </Typist>
        <p className='data'>&#125;</p>
      </code>
      <p className='info-text'>
        Biarritz became so famous because of Napoleon’s wife that always loved
        that place.
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
