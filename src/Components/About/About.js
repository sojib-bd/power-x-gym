import React from 'react';
import img from './about.jpg';
import './About.scss';

const About = () => {
    return (
        <div className="about-container">
            <img src={img} alt="about" />
            <div className="about-details">
                <h1>ABOUT US</h1>
                <h2>WE ARE HERE TO DREAM!</h2>
                <h3>OUR TEAM IS HERE TO SERVE YOU</h3>
                <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aspernatur doloribus error quod sunt atque debitis deleniti saepe quia dolore quasi harum impedit facilis doloremque, possimus magnam nobis eius pariatur.</small></p>
            </div>
        </div>
    );
};

export default About;