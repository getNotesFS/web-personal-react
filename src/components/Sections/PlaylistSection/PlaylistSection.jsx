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

                <ButtonWithArrow page_url="/musica" description="Mis Playlists" className="center" imgsrc="/music.webp" alt_img="Sala lleno de personas escuchando música en vivo" max_width_btn="medium" hasBorderRadius />

                <div className='music-player'> 
                    <AudioPlayer />
                </div>
            </div>

        </section>


    )
}
