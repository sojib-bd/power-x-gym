import React from 'react';
import './Banner.scss';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='bannerContainer'>
            <div className="banner-body">
                <h3>THE BEST FITNESS</h3>
                <h3>STUDIO IN TOWN</h3>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit commodi tenetur in pariatur! Fugiat alias ut similique cumque ipsum illo maiores quae neque, laudantium, doloribus aut, quibusdam dolor.</small></p>
                <Button>JOIN US</Button>
            </div>
        </div>
    );
};

export default Banner;