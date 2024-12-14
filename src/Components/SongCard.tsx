import Play from '../assets/play.png';
import Download from '../assets/download.png';
import One from '../assets/album-thumbnail-one.jpg';

type SongProp = {
  title: string;
  artist: string;
  coverImg: string;
};

const SongCard = ({ coverImg, title, artist }: SongProp) => {
  return (
    <div className='h-auto bg-opacity-50 rounded-md border border-slate-400'>
      <div className='w-52 p-4 text-white'>
        {/* music image */}
        <div className='w-full'>
          <img
            src={coverImg ? coverImg : One}
            alt='One'
            className='rounded-md w-full, h-full'
          />
        </div>

        <p className='w-full text-sm py-2'>
          {title ? title : 'Blinging lights'}
        </p>
        <p className='text-xs pt-1 rou'>{artist ? artist : 'Artist'}</p>

        <div className='w-full flex justify-between mt-4'>
          <div>
            <img src={Play} alt='play' />
          </div>

          <div className='flex gap-2 justify-center items-center'>
            <span>4.1K</span>
            <img src={Download} alt='right arrow' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
