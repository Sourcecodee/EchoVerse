import Headphone from '../assets/headphone.png'



const DropDown = () => {
  return (
    <div className="overflow-hidden h-screen w-full bg-black container mx-auto md:px-14 py-7 flex flex-col justify-between">
         
         {/* container for navBar */}
        <div className="flex flex-row justify-between items-center h-auto">
            
            {/* left text */}
            <div className="text-white xs:text-xs md:text-xl">
                EchoVerse
            </div>

            <div className="flex flex-row justify-center items-center">
                
                <div className="text-white text-2xl mb-0.5 w-10 cursor-pointer">X</div>
                
            </div>
        
        </div>

        {/* nav links */}
        <ul className='flex flex-col justify-center items-center no-underline list-none text-white w-full'>
            <li className='text-5xl my-1'>Home</li>
            <li className='text-5xl my-1'>About</li>
            <li className='text-5xl my-1'>Songs</li>
            <li className='text-5xl my-1'>Blog</li>
            <li className='text-5xl my-1'>Contact</li>
        </ul>

        {/* container for headphone image and card*/}
        <div className='flex w-full auto justify-between items-end'>
            {/* img */}
            <div className='w-6'>
                <img src={Headphone} alt='headphones'/>
            </div>

            {/* links */}
            <div className="h-auto w-10 flex gap-3 flex-row justify-center relative right-12">
                <div className="text-white sm:text-sm md:text-xl">YT</div>
                <div className="text-white sm:text-sm md:text-xl">FB</div>
                <div className="text-white sm:text-sm md:text-xl">IG</div>
            </div>
        
        </div>

    </div>
  )
}

export default DropDown