 

import './PageHeaderInColumns.css';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default function PageHeaderInColumns(props) {

    const { title, content, arial_label, img_url } = props;

    return (


        <header className="page-header">

            <Breadcrumb />
            <div className='page-g'>
                <hgroup>
                    <h1>{title}</h1>
                    <div>{content}</div>
                </hgroup>
                <figure aria-label={arial_label}>
                    <img src={img_url} alt={arial_label} />
                </figure>
            </div>

        </header>





    )
}
