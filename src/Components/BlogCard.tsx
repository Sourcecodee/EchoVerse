import Clock from '../assets/clock.png'

interface Style {
    cardImage: string;
    alt: string;
    cardDate: string;
    title: string;
    content?: string;
    duration: string;
    story: string;
}

const BlogCard = ({cardImage, alt, cardDate, title, content, duration, story}: Style) => {
  
    return (
    
    <div className="w-full flex flex-row justify-center items-center my-3 md:my-5">
        
        <div className="border border-slate-400 bg-opacity-20 bg-slate-400 rounded-lg md:w-4/6 p-3 flex gap-6 flex-col md:flex-row justify-center items-center text-white">
            {/* music image */}
            <div className='flex justify-center md:w-5/6'>
                <img src={cardImage} alt={alt} className='rounded-lg'/>
            </div>

            {/* large text */}
            <div className="flex flex-col justify-between items-center md:w-4/5">
                
                <div className='mb-8 w-full text-base text-justify hidden md:flex justify-end'>
                    <p className='px-3'>{cardDate}</p>
                </div>
                
                <div className='w-full text-justify flex justify-start text-xs md:text-lg'>
                    <p className='px-3'>{title}</p>
                </div>

                {/* smaller text */}
                <div className='my-1 w-full text-[12px] md:text-sm text-justify flex justify-center'>
                    <p className='p-3'>{content}</p>
                </div>

                <div className=' mb-6 md:mb-12 w-full text-xs text-justify flex justify-between px-3'>
                    {/* clock image */}
                    <div className='flex items-center gap-1 md:gap-2 justify-between'>
                        <div className='flex justify-center w-2.5/5'>
                            <img src={Clock} alt='Clock' className='rounded-lg'/>
                        </div>

                        <span className='text-[12px] md:text-sm'>{duration}</span> 
                        <span className='text-[12px] md:text-sm'>{story}</span> 
                    </div>
                
                    <i>O</i>
                </div>

            </div>

        </div>
    
    </div>
  )
}

export default BlogCard