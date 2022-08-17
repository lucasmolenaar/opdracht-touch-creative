import React from 'react';
import './Header.scss';

const Header = ({ totalSites, onlineSites, offlineSites, unsafeSites }) => {
    return (
        <header>
            <h1 className="title">Systems <br></br> touch creative</h1>
            <h4 className="overview">{offlineSites} offline / {unsafeSites} unsafe / {onlineSites } online / {totalSites} total</h4>
        </header>
    );
}

export default Header;