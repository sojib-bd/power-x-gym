import React from 'react';
import MediumBanner from '../MediumBanner/MediumBanner';
import Footer from '../Footer/Footer';
import HorizontalLabelPositionBelowStepper from '../Stepper/Stepper';

const MemberShip = () => {
    return (
        <div>
            <MediumBanner title="your gym membership" />
            <HorizontalLabelPositionBelowStepper />
            <Footer />
        </div>
    );
};

export default MemberShip;