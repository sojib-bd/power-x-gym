import React from 'react';
import { Button } from 'react-bootstrap';
import './PricingCart.scss';


const PricingCart = (props) => {

    const { img, title, price } = props;

    return (
        <div className="cart-container" style={{ backgroundImage: `url(${img})` }}>
            <h6>BILL MONTHLY</h6>
            <h3>{title}</h3>
            <h1>{price}</h1>
            <ul>
                <li><span>&#10003;</span> Mobile-optimized</li>
                <li><span>&#10003;</span> Best Hosting</li>
                <li><span>&#10003;</span> Free Custom</li>
                <li><span>&#10003;</span> Outstanding</li>
                <li><span>&#10003;</span> Happy Customers</li>
            </ul>
            <Button>PURCHASE</Button>
        </div>
    );
};

export default PricingCart;