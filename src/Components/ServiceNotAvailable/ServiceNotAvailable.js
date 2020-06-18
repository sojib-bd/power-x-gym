import React from 'react';
import MediumBanner from '../MediumBanner/MediumBanner';
import Footer from '../Footer/Footer';



const ServiceNotAvailable = (props) => {
    const myStyle = {
        textAlign: 'center',
        marginTop: '30px',
        padding: '100px',
        fontSize: '50px'
    }


    return (
        <div >
            <MediumBanner title={props.title} />
            <h3 style={myStyle}>service not available</h3>
            <Footer />
        </div>
    );
};

export default ServiceNotAvailable;