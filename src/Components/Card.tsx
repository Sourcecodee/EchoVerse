import One from '../assets/album-thumbnail-one.jpg';
import Play from '../assets/play.png';
import Pause from '../assets/pause.png';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Card = () => {
  const musicRef = useRef(null);

  useEffect(() => {
    gsap.to(musicRef.current, {
      x: 0,
      duration: 2,
      opacity: 1,
      width: '230px',
    });
  }, []);

  return (
    <div
      ref={musicRef}
      className='opacity-0 w-0 p-3 hidden sm:block border border-slate-700 text-white rounded-md relative left-4 top-6'
    >
      {/* music image */}
      <div className='w-full border border-slate-700 rounded-md'>
        <img src={One} alt='One' className='rounded-md' />
      </div>

      <p className='w-full text-sm pt-2 '>Blinging lights</p>
      <p className='text-xs'>Artist</p>

      <div className='w-full flex justify-between mt-4'>

        <div>
          <img src={Play} alt='play' />
        </div>

        <div>
          <img src={Pause} alt='right arrow' />
        </div>
      </div>
    </div>
  );
};

export default Card;
