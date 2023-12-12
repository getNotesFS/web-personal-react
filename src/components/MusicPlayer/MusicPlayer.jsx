import React, { useState, useEffect, useRef } from 'react';

import './MusicPlayer.scss';

const MusicPlayer = () => {
    const [index, setIndex] = useState(3);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [pause, setPause] = useState(false);
    const playerRef = useRef(null);
    const timelineRef = useRef(null);
    const playheadRef = useRef(null);
    const hoverPlayheadRef = useRef(null);

    const musicList = [
        // ... tus canciones
    ];

    useEffect(() => {
        const player = playerRef.current;
        const timeline = timelineRef.current;

        const timeUpdate = () => {
            // ... tu lógica de timeUpdate
        };

        player.addEventListener("timeupdate", timeUpdate, false);
        player.addEventListener("ended", nextSong, false);
        timeline.addEventListener("click", changeCurrentTime, false);
        timeline.addEventListener("mousemove", hoverTimeLine, false);
        timeline.addEventListener("mouseout", resetTimeLine, false);

        return () => {
            player.removeEventListener("timeupdate", timeUpdate);
            player.removeEventListener("ended", nextSong);
            timeline.removeEventListener("click", changeCurrentTime);
            timeline.removeEventListener("mousemove", hoverTimeLine);
            timeline.removeEventListener("mouseout", resetTimeLine);
        };
    }, []);

    

    return (
        <div>

        </div>
    )
}

export default MusicPlayer;