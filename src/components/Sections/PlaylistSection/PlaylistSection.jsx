// crear componente react css

import React from 'react';

import './PlaylistSection.css';

import ButtonWithArrow from '../../Buttons/ButtonWithArrow/ButtonWithArrow';
import AudioPlayer from '../../MusicPlayer/AudioPlayer';

export default function PlaylistSection() {

    return (
        <section className='PlaylistSection'>
            <h2>Lo que escucho todos los días</h2>
            <div className='music-column'>

                <ButtonWithArrow page_url="/musica" description="Mis Playlists" className="center" imgsrc="/music.webp" hasBorderRadius />

                <div className='music-player'>
                    {/* <iframe title="Playlist Move It On Over"
                        src="https://open.spotify.com/embed/playlist/1IkEWkIBECMGVX9Qseka9x?utm_source=generator&theme=0"
                        allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe> */}
                    <AudioPlayer />
                </div>
            </div>

        </section>


    )
}
