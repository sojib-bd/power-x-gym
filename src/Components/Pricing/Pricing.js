import React from 'react';
import './Pricing.scss';
import PricingCart from '../PricingCart/PricingCart';
import MediumBanner from '../MediumBanner/MediumBanner';
import Footer from '../Footer/Footer';
import bgImage1 from '../Services/ServiceImages/service1.jpg';
import bgImage2 from '../Services/ServiceImages/service2.jpg';
import bgImage3 from '../Services/ServiceImages/service3.jpg';

const Pricing = () => {
    return (
        <div>
            <MediumBanner title="pricing plans" />
            <div className="price-body">
                <PricingCart
                    img={bgImage1}
                    title="advance plan"
                    price='$140'
                />
                <PricingCart
                    img={bgImage2}
                    title="basic plan"
                    price='$120'
                />
                <PricingCart
                    img={bgImage3}
                    title="Beginers"
                    price='$90'
                />
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;