import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../PageHeader/PageHeader";

import "./Music.css";

import CardWithArrow from "components/Cards/CardWithArrow/CardWithArrow";

const Music = () => {
    return (
        <article className="music-article">

            <PageHeader title="Música" subtitle="Te comparto mis últimos Playlists en Spotify."

                children={
                    <Link to="https://open.spotify.com/playlist/1IkEWkIBECMGVX9Qseka9x" target="_blank">
                        <img src="./music-player/Rock.png" alt="Playlist - Rebel Yell" />
                    </Link>
                }
            />

            <section className="playlists-grid">
                <h2>Playlists</h2>

                <div className="playlists">



                    <CardWithArrow
                        page_url="https://open.spotify.com/playlist/1IkEWkIBECMGVX9Qseka9x"
                        img="./music-player/Rock.png"
                        altText="Playlist - Rebel Yell"
                        title="Playlist - Rebel Yell"
                        isExternal
                    />

                    <CardWithArrow
                        page_url="https://open.spotify.com/playlist/4U92L85BOQ7b8RcN4gVvKx"
                        img="./music-player/Rock-2.png"
                        altText="Playlist - Rock"
                        title="Playlist - Rock"
                        isExternal
                    />

                    <CardWithArrow
                        page_url="https://open.spotify.com/playlist/4nbtiQ3c8HegHGJznv7VXl"
                        img="./music-player/Indie-505.png"
                        altText="Playlist - Indie 505"
                        title="Playlist - Indie 505"
                        isExternal
                    />

                    <CardWithArrow
                        page_url="https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn"
                        img="./music-player/Lofi-beats.png"
                        altText="Playlist - Lofi beats"
                        title="Playlist - Lofi beats"
                        isExternal
                    />

                    <CardWithArrow
                        page_url="https://open.spotify.com/playlist/37i9dQZF1DX3oM43CtKnRV"
                        img="./music-player/00s-Rock-Athems.png"
                        altText="Playlist - 00s Rock Athems"
                        title="Playlist - 00s Rock Athems"
                        isExternal
                    />

                    <CardWithArrow
                        page_url="https://open.spotify.com/playlist/37i9dQZF1E37smVryC6Cet?si=9db5ffda56ab4466"
                        img="./music-player/Daily-Mix-2.png"
                        altText="Playlist - Daily Mix 2"
                        title="Playlist - Daily Mix 2"
                        isExternal
                    />

                </div>


            </section>
        </article>
    )
}

export default Music;