import React, { useContext, useState } from 'react';
import Axios from 'axios';
import '../global.css';

import { SetMyRender } from '../../App';

export default function Contact() {
  const { page, setPage, previousPage, setPreviousPage } =
    useContext(SetMyRender);
  const [anime, setAnime] = useState('slideInLeft');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailStatusMessage, setEmailStatusMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleUnsubscibe = () => {
    setPreviousPage(6);
    setAnime('slideOutLeft');
    setTimeout(() => {
      setPage(page - 2);
    }, 1000);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitDatas = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const emailRes = await Axios.post(
        'https://email-handler-nodejs.herokuapp.com/email',
        {
          email,
          subject,
          message,
        }
      );
      // console.log('MY EMAIL RES: ', emailRes);
      setError(false);
      setEmailSent(true);
      setEmailStatusMessage(emailRes.data.message);
      setIsLoading(false);
    } catch (error) {
      setEmailSent(false);
      setError(true);
      setErrorMessage(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div className={`wrapperDark ${anime}`}>
      <form className='formulaire formulaire-area'>
        <h1 className='title-form'>Contact</h1>
        <input
          className='input-subject'
          name='subject'
          type='subject'
          value={subject}
          required
          onChange={handleChangeSubject}
          placeholder='enter a subject...'
        />
        <input
          className='input-email'
          name='email'
          type='email'
          value={email}
          required
          onChange={handleChangeEmail}
          placeholder='exemple@email.com'
        />
        <textarea
          className='input-message'
          type='text'
          name='message'
          required
          value={message}
          onChange={handleChangeMessage}
          placeholder='type your message here...'
        />
        {error && <p className='email-error'>{errorMessage}</p>}
        {emailSent && <p className='email-sent'>{emailStatusMessage}</p>}
        <button
          type='submit'
          disabled={emailSent || isLoading}
          style={{ cursor: emailSent ? 'not-allowed' : 'pointer' }}
          className={`button-submit-email ${isLoading ? 'email-loading' : ''}`}
          onClick={handleSubmitDatas}
        >
          {isLoading ? '' : emailSent ? 'Thank you' : 'compute'}
        </button>
      </form>
      <button className='button-form-back' onClick={() => handleUnsubscibe()}>
        Back
        <i className='arrow right'></i>
      </button>
    </div>
  );
}
