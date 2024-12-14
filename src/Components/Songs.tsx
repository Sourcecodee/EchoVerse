import Headphone from '../assets/headphone.png';
import fetchMusic from '../Functions/musicApi';
import { useState } from 'react';
import SongCard from './SongCard';
import FixedMenu from './FixedMenu';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  const [title, setTitle] = useState<string>('');

  const [artist, setArtist] = useState<string>('');

  const [coverImg, setCoverImg] = useState<string>('');

  const getSongs = async () => {
    const res = await fetchMusic();

    console.log(res);

    if (res) {
      setSongs(res.tracks.track);

      setTimeout(() => {
        // setTitle(songs[5].name)
        // setArtist(songs[5].artist.name)
        // setCoverImg(songs[10].image[3]['#text'])
        console.log(songs);
      }, 5000);
    } else {
      console.log(songs);
    }
  };

  return (
    <div className='overflow-auto h-screen w-full bg-gradient-to-br from-red-500 to-blue-700 container mx-auto md:px-14 py-7 flex flex-col'>
      {/* container for navBar */}
      <FixedMenu />

      <div
        style={{ fontFamily: 'Playwrite ES' }}
        className='text-5xl text-white w-full flex justify-center mt-10'
      >
        Songs
      </div>

      {/* container for blog cards */}
      <div className='mt-10 flex gap-1 items-center'>
        <button
          className='border bg-slate-600 p-3 rounded-sm'
          onClick={getSongs}
        >
          GetSong
        </button>

        <SongCard title={title} artist={artist} coverImg={coverImg} />
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

export default Songs;
