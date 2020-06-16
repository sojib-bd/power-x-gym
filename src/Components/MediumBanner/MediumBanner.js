import React from 'react';
import './MediumBanner.scss';
import Navigation from '../Navigation/Navigation';

const MediumBanner = (props) => {
    return (
        <div className="medium-banner-container">
            <Navigation />
            <h1>{props.title}</h1>
        </div>
    );
};

export default MediumBanner;