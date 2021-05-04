import React, { useContext, useState } from 'react';
import '../global.css';

import { SetMyRender } from '../../App';

export default function Contact() {
  const { page, setPage, previousPage, setPreviousPage } = useContext(
    SetMyRender
  );
  const [anime, setAnime] = useState('slideInLeft');

  const handleUnsubscibe = () => {
    setPreviousPage(6);
    setAnime('slideOutLeft');
    setTimeout(() => {
      setPage(page - 2);
    }, 1000);
  };

  return (
    <div className={`wrapperDark ${anime}`}>
      <form className='formulaire formulaire-area'>
        <h1 className='title-form'>Contact</h1>
        {/* <label className='label-email' htmlFor='email'>
          email
        </label> */}
        <input
          className='input-email'
          name='email'
          type='email'
          placeholder='exemple@email.com'
        />
        {/* <label className='label-message' htmlFor='message'>
          your message
        </label> */}
        <textarea
          className='input-message'
          type='text'
          name='message'
          placeholder='type your message here...'
        />
        <button className='button-submit-email'>compute</button>
      </form>

      <button
        className='button-wrapper button-right'
        onClick={() => handleUnsubscibe()}
      >
        <i className='arrow right'></i>
      </button>
    </div>
  );
}
