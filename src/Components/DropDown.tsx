import Headphone from '../assets/headphone.png'
import { AuthContext } from './Context/authContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const DropDown = () => {

    const { dropDown, setDropDown } = useContext(AuthContext);

    const setValue = () => {
        setDropDown(!dropDown)
      }

  return (
    <div className="overflow-hidden h-screen w-full bg-black container mx-auto md:px-14 py-7 flex flex-col justify-between">
         
         {/* container for navBar */}
        <div className="flex flex-row justify-between items-center h-auto">
            
            {/* left text */}
            <div className="text-white xs:text-xs md:text-xl">
                EchoVerse
            </div>

            <div className="flex justify-center items-center w-20">
                
                <div onClick={setValue} className="text-white w-full text-2xl mb-0.5 sm:w-10 cursor-pointer text-right">X</div>
                
            </div>
        
        </div>

        {/* nav links */}
        <ul className='flex flex-col justify-center items-center no-underline list-none text-white w-full'>
            
            <a href='/'><li className='text-3xl sm:text-5xl my-1'>Home</li></a>
            <a href='/about'><li className='text-3xl sm:text-5xl my-1'>About</li></a>
            <a href='/songs'><li className='text-3xl sm:text-5xl my-1'>Songs</li></a>
            <a href='/blog'><li className='text-3xl sm:text-5xl my-1'>Blog</li></a>
            <a href='/contact'><li className='text-3xl sm:text-5xl my-1'>Contact</li></a>
            
        </ul>

        {/* container for headphone image and card*/}
        <div className='flex w-full auto justify-between items-end'>
            {/* img */}
            <div className='w-6'>
                <img src={Headphone} alt='headphones'/>
            </div>

            {/* links */}
            <div className="h-auto w-10 flex gap-3 flex-row justify-center relative right-5 sm:right-12">
                <div className="text-white sm:text-sm md:text-xl">YT</div>
                <div className="text-white sm:text-sm md:text-xl">FB</div>
                <div className="text-white sm:text-sm md:text-xl">IG</div>
            </div>
        
        </div>

    </div>
  )
}

export default DropDown