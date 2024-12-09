import Headphone from '../assets/headphone.png'
import BlogCard from './BlogCard'
import HoodImage from '../assets/album-thumbnail-five.jpg'
import About from '../assets/about-img.jpg'
import Nine from '../assets/album-thumbnail-nine.jpg'
import Sing from '../assets/bg-image-three.jpg'
import Castle from '../assets/album-thumbnail-four.jpg'
import FixedMenu from './FixedMenu'


const Blog = () => {
  return (
    <div className="overflow-auto h-screen w-full bg-gradient-to-br from-red-500 to-blue-700 container mx-auto md:px-14 py-7 flex flex-col">
        {/* container for navBar */}
        <FixedMenu/>

        <div style={{fontFamily: 'Playwrite ES'}} className='text-2xl md:text-5xl text-white w-full flex justify-center mt-10'>Blog</div>

        {/* container for blog cards */}
        <div className='mt-2 md:mt-10'>

            <BlogCard 
                cardImage={HoodImage} 
                alt='Hood image' 
                cardDate='3 Aug,20' 
                title='HOW IT STARTED'
                content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nisi, libero facere mollitia iure ex aspernatur corporis!'
                duration='4 Min'
                story='Story/Experience'
                />

            <BlogCard 
                cardImage={About} 
                alt='blog image' 
                cardDate='30 Jun,20' 
                title='NEW ALBUM RELEASE'
                content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nisi, libero facere mollitia iure ex aspernatur corporis!'
                duration='&nbsp; 3 Min '
                story='Song/Music'
                />

            <BlogCard 
                cardImage={Nine} 
                alt='crystal image' 
                cardDate='6 Jan,20' 
                title='DJ NIGHT'
                content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nisi, libero facere mollitia iure ex aspernatur corporis!'
                duration='11 Min'
                story='Tour/Experience'
                />

            
            <BlogCard 
                cardImage={Sing} 
                alt='Sing image' 
                cardDate='23 Nov,19' 
                title='NEW ALBUM RELEASE'
                content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nisi, libero facere mollitia iure ex aspernatur corporis!'
                duration='17 Min'
                story='Song/Music'
                />
            
            <BlogCard 
                cardImage={Castle} 
                alt='Castle image' 
                cardDate='3 Aug,20' 
                title='A TRIP TO BELGIUM'
                content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nisi, libero facere mollitia iure ex aspernatur corporis!'
                duration='5 Min'
                story='Story/Experience'
                />

        </div>

        {/* container for headphone image and card*/}
        <div className='flex w-full auto justify-between mt-auto fixed bottom-2 md:bottom-6 left-4 md:left-14'>
            {/* img */}
            <div className='w-6'>
                <img src={Headphone} alt='headphones'/>
            </div>

            {/* links */}
            <div className="h-auto w-10 flex gap-3 flex-row justify-center">
                
            </div>
        
        </div>
    
    </div>
  )
}

export default Blog