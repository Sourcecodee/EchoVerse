import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/authContext';
import { useContext } from 'react';

const FixedMenu = () => {
  type Confirm = {
    dropDown: boolean;
    setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  };

  const { dropDown, setDropDown } = useContext(AuthContext) as Confirm;

  const setValue = () => {
    setDropDown(!dropDown);
  };

  return (
    <div>
      {/* container for navBar */}
      <div className='flex flex-row justify-between items-center h-auto'>
        {/* left text */}
        <div className='text-white sm:text-xs md:text-xl z-10 fixed top-8'>
          <Link to={'/'}>EchoVerse</Link>
        </div>

        <div className='z-10 flex flex-row justify-center items-center fixed right-4 top-6 sm:right-16 sm:top-7'>
          <div className='text-white md:mb-0.5 hidden md:block'>Menu</div>

          <div
            onClick={setValue}
            className='flex flex-col justify-center gap-1 py-1 items-center hover: cursor-pointer h-8'
          >
            <div className='w-6 bg-white h-0.5'></div>
            <div className='w-6 bg-white h-0.5'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedMenu;
