import React from 'react';

import './CardWithVideo.css';

import { Link } from 'react-router-dom';

import ButtonWithArrowExternal from 'components/Buttons/ButtonWithArrowExternal/ButtonWithArrowExternal';

export default function CardWithVideo(props) {

    const { title, year, director, cast, description, trailer_url, content_title, content_url, imgsrc_principal, imgsrc_2, imgsrc_3 } = props;

    return (
        <article className='card-with-video'>

            <Link to={trailer_url} className='img_principal' target='_blank'>
                <img src={imgsrc_principal} alt="" />
            </Link>


            <figure>
                <img src={imgsrc_2} alt="Memento" className='img_sec' />
            </figure>
            <figure>
                <img src={imgsrc_3} alt="Memento" className='img_ter' />
            </figure>
            <hgroup>
                <h3>{title}</h3>
                <p><strong>Año:</strong> {year}
                    <br /> <strong>Director:</strong> {director}
                    <br /> <strong>Reparto:</strong> {cast}
                </p>

                <p>{description}</p>
                <p>
                    <ButtonWithArrowExternal page_url={content_url} description={content_title} className="left" isExternal />

                </p>
            </hgroup>

        </article>
    )
}
