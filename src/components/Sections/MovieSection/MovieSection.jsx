// componente para la seccion de peliculas con css
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieSection.css';

import ButtonWithArrow from '../../Buttons/ButtonWithArrow/ButtonWithArrow';

export default function MovieSection() {
    return (
        <section className='MovieSection'>
            <h2>Películas que recomiendo</h2>
            <div className='MovieCard'>
                <article className='article-container'>

                    <img src="./memento.jpg" alt="Memento" />

                    <hgroup>
                        <h3>Memento</h3>
                        <p><strong>Año:</strong> 2000
                            <br /> <strong>Director:</strong> Christopher Nolan
                            <br /> <strong>Reparto:</strong> Guy Pearce, Carrie-Anne Moss, Joe Pantoliano
                        </p>
                        <p>La memoria de Leonard, un investigador de una agencia de seguros, está irreversiblemente dañada
                            debido a un golpe sufrido en la cabeza cuando intentaba evitar el asesinato de su mujer. Para
                            investigar e intentar vengar el asesinato de su esposa tiene que recurrir a la ayuda de una
                            cámara
                            instantánea y a las notas tatuadas en su cuerpo.</p>
                        <p><Link to="https://www.filmaffinity.com/es/film931317.html" target="_blank"> Ver Trailer <svg
                            xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg></Link></p>
                    </hgroup>

                </article>
                <ButtonWithArrow page_url="/peliculas" description="Descubrir más películas" className="center" imgsrc="./movies.jpg" />
            </div>
        </section>

    )
}

