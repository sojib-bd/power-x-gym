import React from 'react';
import './ClassCart.scss';

const ClassCart = (props) => {
    const { img, title } = props;

    const bgImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',

    }
    return (
        <div className="classCart" style={bgImageStyle}>
            <h4>{title}<span className="direction">&#8594;</span></h4>
        </div>
    );
};

export default ClassCart;