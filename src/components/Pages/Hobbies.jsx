import React from "react";

import { Link } from "react-router-dom";

import PageHeader from "../PageHeader/PageHeader";
 

import "./Hobbies.css";

import CardWithArrow from "components/Cards/CardWithArrow/CardWithArrow";

import useDocumentTitle from "../Hooks/custom-hooks";

const Hobbies = () => {
    useDocumentTitle('Mis hobbies - Sebastián Mármol');
    return (
        <article className="hobbies-article">

        <PageHeader title="Mis hobbies" subtitle="Te comparto un poco más de mi vida."

             
        />

        <section className="hobbies-grid">
            <h2>Mis Hobbies</h2>

            <div className="hobbies">



                <CardWithArrow
                    page_url="/hobbies/fotografia"
                    img="./photography-2.jpg"
                    altText="Hobbies - Fotografía"
                    title="Fotografía"
                     
                />
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

                
 

            </div>


        </section>
    </article>
    );
}

export default Hobbies;