
import React from 'react';
import { Link } from 'react-router-dom';
import './HobbiesSection.css';

import CardWithArrow from '../../Cards/CardWithArrow/CardWithArrow';
import ButtonWithArrow from '../../Buttons/ButtonWithArrow/ButtonWithArrow';

export default function HobbiesSection() {

    return (
        <section id="hobbies" className='HobbiesSection'>
            <h2>Mis hobbies</h2>

            <div className="hobby-grid">
                <CardWithArrow
                    page_url="/hobbies/senderismo"
                    img="./trekkin-2.jpg"
                    altText="Amanecer en la montaña El Altar"
                    title="Senderismo"
                />

                <CardWithArrow
                    page_url="/hobbies/videojuegos"
                    img="./video-game.jpg"
                    altText="Setup de PC Gamer"
                    title="Videojuegos"
                />
                <div className='external-arrow'>
                <ButtonWithArrow page_url="/hobbies" description="Ver todos los hobbies" className="center" imgsrc="./hobbies.jpg" hasBorderRadius />
                </div>

            </div>
          





        </section>
    )

}
