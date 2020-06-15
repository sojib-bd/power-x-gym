import React from 'react';
import './MarketingSpeech.scss';
import MarketingElement from '../MarketingElement/MarketingElement';
import img1 from './MarketingSpeechImages/Group 87.png';
import img2 from './MarketingSpeechImages/Group 88.png';
import img3 from './MarketingSpeechImages/gift-2.png';




const MarketingSpeech = () => {
    return (
        <div className="marketing-container">
            <h1><span style={{ color: 'gold' }}>WHY</span> CHOOSE US</h1>
            <div className="body-container">
                <MarketingElement
                    img={img1}
                    title="fitness training"
                />
                <MarketingElement
                    img={img2}
                    title="tons of cardio & strength"
                />
                <MarketingElement
                    img={img3}
                    title="no commitment memberships"
                />

            </div>

        </div>
    );
};

export default MarketingSpeech;