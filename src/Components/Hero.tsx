import Singer from '../assets/bg-image-three.jpg'
import NavBar from './NavBar'
import SLinks from './SLinks'
import Headphone from '../assets/headphone.png'
import Card from './Card'

const Hero = () => {
  return (
    <div className="overflow-hidden h-screen w-full bg-cover bg-top bg-no-repeat container mx-auto md:px-14 py-7 flex flex-col justify-between" style={{backgroundImage: `url(${Singer})`}}>
        {/* container for navBar */}
        <NavBar/>
        {/* container for Social media links */}
        <SLinks/>
        {/* container for headphone image and card*/}
        <div className='flex w-full auto justify-between items-end'>
          {/* img */}
          <div className='w-6'>
            <img src={Headphone} alt='headphones'/>
          </div>
          {/* card */}
          <Card/>

        </div>

    </div>
  )
}

export default Hero