import React from 'react';

import './PageHeader.css';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default function PageHeader(props) {

    const { title, subtitle } = props;

    return (
        

            <header  className="page-header">
              
               <Breadcrumb />

                <hgroup>
                    <h1>{title}</h1>
                    <p>{subtitle}</p> 
                </hgroup>
               
                <div className='page-cover'>
                    {props.children}
                </div>

            </header>

       
    )
}
 