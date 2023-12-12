import React from 'react';
 
import './MusicSection.css';

import PageHeader from '../PageHeader/PageHeader';

export default function MusicSection(props) {

    const { title, subtitle } = props;

    return (
        <div className="music-page">
            <PageHeader title={title} subtitle={subtitle} />
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}


