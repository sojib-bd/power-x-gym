import React from 'react';
import './MarketingElement.scss';

const MarketingElement = (props) => {
    const { img, title } = props;
    return (
        <div className="element">
            <div className="element-body">
                <img src={img} alt="" style={{ height: '100px' }} />
                <h5>{title}</h5>
                <p ><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo deleniti earum magnam rem exercitationem mollitia autem, reprehenderit quidem veniam aspernatur a animi nesciunt modi.</small></p>
            </div>
        </div>
    );
};

export default MarketingElement;