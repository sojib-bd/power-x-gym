import React from 'react';
import './ServiceItem.scss';

const ServiceItem = (props) => {

    const { logo, title } = props;

    const myStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        backgroundColor: '#757091',
        backgroundBlendMode: 'multiply'
    }


    return (
        <div className="service-item" style={myStyle}>
            <img src={logo} alt="" />
            <h1>{title}</h1>
            <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, deserunt quaerat mollitia porro praesentium minima nemo neque accusantium adipisci incidunt doloribus a officia. </small></p>
        </div>
    );
};

export default ServiceItem;