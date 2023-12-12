import React from 'react';

import { Link } from 'react-router-dom';


import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './PageHeaderInColumnsMix.css';


export default function PageHeaderInColumnsMix(props) {

    const { title, content, arial_label, img_url, video_url_pg } = props;

    console.log("props", props);

    return (


        <header className="page-header-single">

            <Breadcrumb />
            <div className='page-g-single'>
                {video_url_pg ? (
                    <Link to={video_url_pg} target="_blank">
                        <figure aria-label={arial_label}>
                            <img src={img_url} alt={arial_label} />
                        </figure>
                    </Link>
                ) : (
                    <figure aria-label={arial_label}>
                        <img src={img_url} alt={arial_label} />
                    </figure>
                )}

                <hgroup>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </hgroup>
            </div>


        </header>





    )
}
