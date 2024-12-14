import Headphone from '../assets/headphone.png';
import Guitar from '../assets/about-img.jpg';

import FixedMenu from './FixedMenu';

const About = () => {
  return (
    <div className='overflow-auto h-screen w-full bg-black container mx-auto md:px-14 py-7 flex flex-col'>
      <FixedMenu />

      <div
        style={{ fontFamily: 'Playwrite ES' }}
        className='text-2xl md:text-5xl text-white w-full flex justify-center mt-10'
      >
        About
      </div>

      <div className='w-full p-3 flex flex-col justify-center text-white rounded-md relative md:left-4 md:top-6'>
        {/* music image */}
        <div className='w-full flex justify-center'>
          <img src={Guitar} alt='Guitar' className='md:w-3/6' />
        </div>

        {/* large text */}
        <div className='md:my-6 w-full text-justify flex justify-center md:text-3xl pt-2'>
          <p className='mb-4 my-1 md:w-4/5 font-sans'>
            Hi there, I’m glad you found me. My name is Arlo Brown and I like to
            make music.
          </p>
        </div>

        {/* smaller text */}
        <div className='md:my-4 w-full text-[14px] md:text-sm text-justify flex justify-center'>
          <p className='md:w-4/5'>
            On this page you can find out what I have been up to lately and
            maybe even a little bit about where I will go in the future. For me,
            the greatest thing about being a musician is being in the position
            to inspire other people. I take such pleasure in hearing that people
            have been motivated to create after hearing my music, whether it be
            a painting, a poem, their own music or something completely
            different. Music is not a one way street, it is a conversation where
            the listener's role is as important as the artist's. Well, here you
            can find my side of it all.
          </p>
        </div>

        <div className='md:my-4 w-full text-base text-justify flex justify-center'>
          <span> Arlo Brown.</span>
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

export default About;
