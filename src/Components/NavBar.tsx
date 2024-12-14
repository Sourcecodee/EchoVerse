import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AuthContext } from './Context/authContext';

// navBar component
const NavBar = () => {
  const boxRef = useRef(null);

  const {dropDown, setDropDown} = useContext(AuthContext)

  useEffect(() => {
    const tl = gsap.timeline();
      tl.to(boxRef.current, { x: 0, duration: 2, opacity: 0.5, zoom: 5})
        .to(boxRef.current, { x: 0, duration: 2, opacity: 1, zoom: 1})
  }, []);

  const setValue = () => {
    setDropDown(!dropDown)
  }

  return (
    <div
      ref={boxRef}
      className='flex translate-x-[-200px] flex-row justify-between items-center h-auto'
    >
      {/* left text */}
      <div className='text-white md:text-xl'>
        <Link to={'/'}>EchoVerse</Link>
      </div>

      <div className='flex flex-row justify-center items-center'>
        <div className='text-white mb-0.5 hidden sm:flex'>Menu</div>

        <div onClick={setValue} className='flex flex-col justify-center py-1 items-center hover: cursor-pointer h-8 gap-1'>
          <div className='w-6 bg-white h-0.5'></div>
          <div className='w-6 bg-white h-0.5'></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
