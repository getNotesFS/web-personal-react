import React from "react";

import { Link, useLocation } from 'react-router-dom';
import "./Breadcrumb.css";

const BreadcrumbSeparator = () => (
    <small><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="24" height="24">
        <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg></small>
);

export default function Breadcrumb() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const breadcrumbItems = pathSegments.map((segment, index, arr) => {
        const path = `/${arr.slice(0, index + 1).join('/')}`;
        const isLast = index === arr.length - 1;
        return (
            <React.Fragment key={index}>
                {index > 0 && <BreadcrumbSeparator />}
                {isLast ? (
                    <span>{segment}</span>
                ) : (
                    <Link to={path}>{segment}</Link>
                )}
            </React.Fragment>
        );
    });

    return (
        <nav aria-label="Breadcrumb" className="breadcrumb-general">
            <Link to="/">Inicio</Link>
            {breadcrumbItems.length > 0 && <BreadcrumbSeparator />}
            {breadcrumbItems}
        </nav>
    );
}