import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Services.scss';
import img1 from './ServiceImages/service1.jpg';
import img2 from './ServiceImages/service2.jpg';
import img3 from './ServiceImages/service3.jpg';
import logo1 from './ServiceImages/service-logo1.png';
import logo2 from './ServiceImages/service-logo2.png';
import logo3 from './ServiceImages/service-logo3.png';

const Services = () => {
    return (
        <div className="service-container">
            <ServiceItem
                img={img1}
                title="PROGRESSION"
                logo={logo1}
            />
            <ServiceItem
                img={img2}
                title="WORKOUT"
                logo={logo2}
            />
            <ServiceItem
                img={img3}
                title="NUTRITION"
                logo={logo3}
            />
        </div>
    );
};

export default Services;