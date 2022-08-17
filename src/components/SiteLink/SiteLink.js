import React from 'react';
import './SiteLink.scss';

const SiteLink = ({ name, url, https }) => {
    return (
        <a href={url}>
            <li className='site-link'>
                { name }

                <div className={`circle ${https ? "online" : ""}`}></div>
            </li>
        </a>
        
    );
}

export default SiteLink;