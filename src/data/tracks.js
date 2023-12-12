 
// audio files
import intheends from './music-player/sngs/In The End - Linkin Park.mp3'; 
import faints from './music-player/sngs/Faint - Linkin Park.mp3'; 
import disfigs from './music-player/sngs/Disfigure - Blank [NCS Release].mp3';
// import bfmvs from './music-player/sngs/Bullet For My Valentine - Tears Don_t Fall.mp3';
import blinkas from './music-player/sngs/blink-182 - Adam-s Song.mp3';

// audio thumbnails
import intheend from './music-player/imgs/In The End - Linkin Park.jpg';
import faint from './music-player/imgs/Fain - Linkin Park.jpg'; 
import disfigure from './music-player/imgs/disfigure.jpg';
// import bfmv from './music-player/imgs/Bullet For My Valentine - Scream Aim Fire.jpg';
import blinka from './music-player/imgs/blink-182 - Adam-s Song.jpeg';

export  const tracks = [
  {
    title: 'blink-182 - Adam-s Song',
    src: blinkas,
    author: 'blink-182',
    thumbnail: blinka,
},
  {
    title: 'Faint - Linkin Park',
    src: faints,
    author: 'Linkin Park',
    thumbnail: faint,
  }, 
  {
    title: 'In The End - Linkin Park',
    src: intheends,
    author: 'Linkin Park',
    thumbnail: intheend,
  },

 
  {
    title: 'Disfigure - Blank [NCS Release]',
    src: disfigs,
    author: 'NCS Release',
    thumbnail: disfigure,

  } 
];
