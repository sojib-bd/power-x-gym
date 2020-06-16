import React from 'react';
import MediumBanner from '../MediumBanner/MediumBanner';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';


const ServiceNotAvailable = (props) => {
    const styleService = {
        textAlign: 'center',
        marginTop: '100px',
        padding: '100px'
    }


    return (
        <div >
            {/* <MediumBanner /> */}
            <h3 style={{ styleService }}>service not available</h3>
            {/* <Footer /> */}
        </div>
    );
};

export default ServiceNotAvailable;