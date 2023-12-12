import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../PageHeader/PageHeader";

import "./Movie.css";
import CardWithVideo from "../Cards/CardWithVideo/CardWithVideo";


const Music = () => {
    return (
        <article className="movie-article">

            <PageHeader title="Películas que recomiendo" subtitle="Te comparto algunas de mis películas favoritas."

                children={
                    <Link to="https://www.youtube.com/watch?v=U1drsdHFyTU" target="_blank">
                        <img src="./top-10-peliiculas.jpg" alt="10 Mejores Películas 2023 (Hasta Hoy)" />
                    </Link>
                }
            />

            <section className="movie-grid">
                <h2>Películas</h2>

                <div className="movies">
 
                    <CardWithVideo
                        title="Memento"
                        year="2000"
                        director="Christopher Nolan"
                        cast="Guy Pearce, Carrie-Anne Moss, Joe Pantoliano"
                        description="La memoria de Leonard, un investigador de una agencia de seguros, está irreversiblemente dañada debido a un golpe sufrido en la cabeza cuando intentaba evitar el asesinato de su mujer: éste es el último hecho que recuerda del pasado. La memoria reciente la ha perdido: los hechos cotidianos desaparecen de su mente en unos minutos. Así pues, para investigar e intentar vengar el asesinato de su esposa tiene que recurrir a la ayuda de una cámara instantánea y a las notas tatuadas en su cuerpo."
                        content_title="Información de la película"
                        trailer_url="https://www.youtube.com/embed/mV9l1enMqvk?si=8Kh2Y14WykGMuC5g"
                        content_url="https://www.filmaffinity.com/es/film931317.html"
                        imgsrc_principal="./videos/Memento.jpg"
                        imgsrc_2="./memento.png"
                        imgsrc_3="./memento.jpg"
                    />

                    <CardWithVideo
                        title="Her"
                        year="2013"
                        director="Spike Jonze"
                        cast="Joaquin Phoenix, Amy Adams, Rooney Mara, Olivia Wilde, Scarlett Johansson"
                        description="En un futuro cercano, Theodore, un hombre solitario a punto de divorciarse que trabaja en una empresa como escritor de cartas para terceras personas, compra un día un nuevo sistema operativo basado en el modelo de Inteligencia Artificial, diseñado para satisfacer todas las necesidades del usuario. Para su sorpresa, se crea una relación romántica entre él y Samantha, la voz femenina de ese sistema operativo."
                        content_title="Información de la película"
                        trailer_url="https://www.youtube.com/embed/M7oBRAG8NBg?si=8MxS6SXH4imFXxJL"
                        content_url="https://www.filmaffinity.com/es/film889720.html"
                        imgsrc_principal="./videos/Her.jpg"
                        imgsrc_2="./her-2.jpg"
                        imgsrc_3="./her-3.jpg"
                    />

                    <CardWithVideo

                        title="Interstellar"
                        year="2014"
                        director="Christopher Nolan"
                        cast="Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, Michael Caine, Matt Damon"
                        description="Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores dirigidos por el piloto Cooper (McConaughey) y la científica Amelia (Hathaway) emprende una misión que puede ser la más importante de la historia de la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda garantizar el futuro de la raza humana.."
                        content_title="Información de la película"
                        trailer_url="https://www.youtube.com/embed/UoSSbmD9vqc?si=MMerG5hrSgnRYRaw"
                        content_url="https://www.filmaffinity.com/es/film704416.html"
                        imgsrc_principal="./videos/Interestelar.jpg"
                        imgsrc_2="./interestelar-2.jpg"
                        imgsrc_3="./interestelar-3.jpg"
                    />


                </div>


            </section>
        </article>
    )
}

export default Music;