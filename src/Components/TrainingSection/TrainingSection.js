import React from 'react';
import './TrainingSection.scss';

const TrainingSection = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>TRAINING <span style={{ color: 'gold' }}>PROGRAMS</span></h1>
            <div className="training-container">
                <div className="program1">
                    <h3>YOGA TRAINING SESSION <span className="arrowSymbol">&#8594;</span></h3>
                </div>
                <div className="program2">
                    <h3>CARDIO TRAINING SESSION <span className="arrowSymbol">&#8594;</span></h3>
                </div>
            </div>
        </div>
    );
};

export default TrainingSection;