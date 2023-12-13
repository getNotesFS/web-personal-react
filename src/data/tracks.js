 
// audio files
import intheends from './music-player/sngs/In The End - Linkin Park.mp3'; 
import faints from './music-player/sngs/Faint - Linkin Park.mp3'; 
import disfigs from './music-player/sngs/Disfigure - Blank [NCS Release].mp3';
// import bfmvs from './music-player/sngs/Bullet For My Valentine - Tears Don_t Fall.mp3';
import blinkas from './music-player/sngs/blk182.mp3';

// audio thumbnails
import intheend from './music-player/imgs/In The End - Linkin Park.jpg';
import faint from './music-player/imgs/Fain - Linkin Park.jpg'; 
import disfigure from './music-player/imgs/disfigure.jpg'; 
import blinka from './music-player/imgs/blk182.jpeg';

export  const tracks = [
  {
    title: `Adam's Song`,
    src: blinkas,
    author: 'Blink-182',
    thumbnail: blinka,
},
  {
    title: 'Faint',
    src: faints,
    author: 'Linkin Park',
    thumbnail: faint,
  }, 
  {
    title: 'In The End',
    src: intheends,
    author: 'Linkin Park',
    thumbnail: intheend,
  },

 
  {
    title: 'Disfigure',
    src: disfigs,
    author: 'Blank [NCS Release]',
    thumbnail: disfigure,

  } 
];
