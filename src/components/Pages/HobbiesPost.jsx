import React from "react";
import { Link } from "react-router-dom";
import "./HobbiesPost.css";

import PageHeaderInColumnsMix from "components/PageHeader/PageHeaderInColumnsMix";

export default function HobbiesPost({ galleryItems, nextLink, previousLink, title, content, img_url, arial_label, video_url_pg }) {
    return (
        <article className="hobbies-single-article">
            <PageHeaderInColumnsMix
                title={title}
                content={content}
                img_url={img_url}
                arial_label={arial_label}
                video_url_pg={video_url_pg}
            />

            <section className="main-content">
                <h2>Galería</h2>
                <div className="gallery">
                    {galleryItems.map((item, index) => (
                        item.video_url ? (

                            <Link to={item.video_url} target="_blank">
                                <figure key={index}>
                                    <img src={item.imageUrl} alt={item.caption} />
                                    <figcaption>{item.caption}
                                   { item.description ? (
                                        <p className="g-item-description">{item.description}</p>
                                    ) : (
                                        <p></p>
                                    )
                                    } 
                                    
                                    </figcaption>
                                </figure>
                            </Link>
                        ) : (
                            <figure key={index}>
                                <img src={item.imageUrl} alt={item.caption} />
                                <figcaption>{item.caption}
                                { item.description ? (
                                        <p className="g-item-description">{item.description}</p>
                                    ) : (
                                        <p></p>
                                    )
                                    } 
                                </figcaption>
                            </figure>
                        )
                    ))}

                </div>
            </section>
            <nav className="inner-navigation">
                {previousLink && (
                    <Link to={previousLink.path}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512" width="24" height="24">
                            <path
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                        </svg> {previousLink.label}

                    </Link>
                )}
                {nextLink && (
                    <Link to={nextLink.path}>
                        {nextLink.label}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                            <path
                                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </Link>
                )}
            </nav>
        </article>
    );
}
