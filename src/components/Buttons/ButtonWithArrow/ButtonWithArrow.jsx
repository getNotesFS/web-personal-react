
import React from 'react';

import { Link } from 'react-router-dom';

import './ButtonWithArrow.css';

const ButtonWithArrow = ({ page_url,
  description,
  className,
  isExternal = false,
  hasBorder = false,
  hasBorderRadius = false,
  max_width_btn,
  alt_img,
  ...restProps }) => {
  const { imgsrc } = restProps;
  
  const linkClass = `link-button ${hasBorder ? 'with-border' : ''} ${className || ''} ${hasBorderRadius ? 'with-border-radius' : ''} ${max_width_btn ? 'max-width-btn-'+max_width_btn : ''}`;
  const target = isExternal ? '_blank' : '_self';
  const rel = isExternal ? 'noopener noreferrer' : '';

  return (
    <Link to={page_url} className={linkClass} target={target} rel={rel} {...restProps}>
      <img src={imgsrc} alt={alt_img} />
      <h3>{description} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="link-icon">
        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
      </svg></h3>
      
    </Link>
  );

};

export default ButtonWithArrow;
