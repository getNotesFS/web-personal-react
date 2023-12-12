// List of songs to play

import React, { useState, useEffect } from 'react';

import './MusicPlayer.css';

// import components

const PlayList = ({ tracks, setTrackIndex, setCurrentTrack, trackIndex }) => {

    

    const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

    

    useEffect(() => {
        setTrackIndex(selectedTrackIndex);
        setCurrentTrack(tracks[selectedTrackIndex]);
    }, [selectedTrackIndex]);

    return (
        <div className="playlist"> 
        <ul>
            {tracks.map((track, index) => (
            <li
                key={index}
                onClick={() => {
                    setTrackIndex(index); // Actualiza el índice de la pista
                    setCurrentTrack(tracks[index]); // Actualiza la pista actual
                }}
                className={index === trackIndex ? 'selected' : ''}
            >
                <div className="track-details">
                    <h3 className="track-title">{track.title}</h3>
                    <h4 className="track-artist">{track.artist}</h4>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default PlayList;
