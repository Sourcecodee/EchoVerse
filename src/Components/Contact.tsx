import Headphone from '../assets/headphone.png';
import FixedMenu from './FixedMenu';
import { useState } from 'react';

const Contact = () => {
  // a use state hook to handle state changes
  const [state, setState] = useState({});

  // code for an on change event
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState((values) => ({ ...values, [name]: value }));
    console.log(state);
  };

  return (
    <div className='overflow-auto h-screen w-full bg-black container mx-auto md:px-14 py-7 flex flex-col'>
      {/* container for navBar */}
      <FixedMenu />

      <div
        style={{ fontFamily: 'Playwrite ES' }}
        className='text-2xl md:text-5xl text-white w-full flex justify-center mt-10 md:mt-16'
      >
        Contact
      </div>

      {/* container for form*/}
      <div className='mt-5 md:mt-10 flex-col md:flex-row flex w-full h-auto font-[roboto]'>
        <form className='w-full md:w-3/5 p-2 flex flex-col gap-3 text-slate-500 bg-black h-auto md:overflow-hidden'>
          <div className='flex md:flex-row flex-col justify-between items-center gap-4 md:gap-4 w-full md:h-10'>
            <div className='w-full md:w-[50%] h-full border border-transparent border-b-slate-500'>
              <input
                onChange={handleChange}
                name='name'
                value={state.name || ''}
                className='w-full h-full px-3 outline-none bg-black'
                type='text'
                placeholder='NAME'
              />
            </div>

            <div className='w-full md:w-[50%] h-full border border-transparent border-b-slate-500'>
              <input
                onChange={handleChange}
                name='email'
                value={state.email || ''}
                className='w-full h-full px-3 outline-none bg-black'
                type='text'
                placeholder='EMAIL'
              />
            </div>
          </div>

          <div className='flex justify-center items-center w-full md:h-10'>
            <div className='w-full h-full border border-transparent border-b-slate-500'>
              <input
                onChange={handleChange}
                name='subject'
                value={state.subject || ''}
                className='w-full h-full px-3 outline-none bg-black'
                type='text'
                placeholder='SUBJECT'
              />
            </div>
          </div>

          <div className='w-full md:h-28 bg-slate-400 mt-2'>
            <div className='w-full h-full border-b-slate-500'>
              <textarea
                onChange={handleChange}
                name='message'
                value={state.message || ''}
                className='w-full h-32 md:h-full px-3 border border-transparent border-b-slate-500 outline-none bg-black'
                placeholder='MESSAGE'
              ></textarea>
            </div>
          </div>

          <div className='flex justify-center items-center w-full md:h-10 mt-3'>
            <button
              className='border border-slate-500 text-slate-300 px-4 py-1 text-sm'
              type='submit'
            >
              SEND
            </button>
          </div>
        </form>

        {/* container for spinning text */}
        <div className='w-2/5 flex flex-col justify-center items-center h-full text-white'>
          <div>
            <span className='bg-orange-500'>
              {' '}
              FOR COLLABORATION * &nbsp;&nbsp;&nbsp;&nbsp; FOR COLLABORATION *
              &nbsp;&nbsp;&nbsp;&nbsp; FOR COLLABORATION *
              &nbsp;&nbsp;&nbsp;&nbsp; FOR COLLABORATION *
              &nbsp;&nbsp;&nbsp;&nbsp;{' '}
            </span>
          </div>

          <div className='w-full flex justify-center items-center bg-green-500'>
            INFO@GMAIL.COM
          </div>
        </div>
      </div>

      {/* container for headphone image and card*/}
      <div className='flex w-full auto justify-between mt-auto fixed bottom-2 sm:bottom-6 left-4 sm:left-14'>
        {/* img */}
        <div className='w-6'>
          <img src={Headphone} alt='headphones' />
        </div>

        {/* links */}
        <div className='h-auto w-10 flex gap-3 flex-row justify-center'></div>
      </div>
    </div>
  );
};

export default Contact;
