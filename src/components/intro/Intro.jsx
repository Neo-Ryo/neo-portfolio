import React, { useContext, useEffect, useState } from 'react';
import '../global.css';
import myAvatar from '../../img/Lgif.gif';
import ss2 from '../../img/ss2.gif';
import { SetMyRender } from '../../App';
import Typist from 'react-typist';

export default function Intro() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );
  const [avatar, setAvatar] = useState(myAvatar);

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
      <h1 className='title title-area'>Who am I?</h1>
      <figure className='picture-area'>
        <img
          onMouseEnter={() => setAvatar(ss2)}
          onMouseLeave={() => setAvatar(myAvatar)}
          id='picture-style'
          src={avatar}
          alt='L from death note'
        />
        <figcaption>yes, this is a picture of me...</figcaption>
      </figure>
      <p className='main-text main-text-area'>
        Well, my name is Marc, I grew up in Lyon and I use to spend all of my
        spare time drawing mangas characters and playing video games. I wasn't
        much of a scholar person and when I turned 22 I decided to go to.....
      </p>
      <code className='code code-area'>
        <Typist>
          <Typist.Delay ms={3000} />
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
          <p className='data'>&#125;</p>
        </Typist>
      </code>
      <button
        className='button-wrapper button-bottom'
        onClick={() => handleUnsubscibe()}
      >
        <i className='arrow down'></i>
      </button>
    </div>
  );
}
