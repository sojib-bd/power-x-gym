import React from 'react';
import './Classes.scss';
import MediumBanner from '../MediumBanner/MediumBanner';
import Footer from '../Footer/Footer';
import ClassCart from '../ClassCart/ClassCart';
import img1 from './ClassImages/psyco1.png';
import img2 from './ClassImages/self-defense.jpg';
import img3 from './ClassImages/gym.jpg';
import img4 from './ClassImages/cardio-training.jpg';
import img5 from './ClassImages/strength.jpg';
import img6 from './ClassImages/psyco2.jpg';


import { Link } from "react-router-dom";




const Classes = () => {


    return (
        <div>

            <MediumBanner title="our classes" />
            <div className="classBody">
                <Link to="/psycho-training" style={{ textDecoration: 'none', color: 'black' }}>
                    <ClassCart
                        img={img1}
                        title="psycho training"
                    />
                </Link>
                <Link to="/self-defense" style={{ textDecoration: 'none', color: 'black' }}>
                    <ClassCart
                        img={img2}
                        title="self defense"
                    />

                </Link>
                <Link to="/advance-gym" style={{ textDecoration: 'none', color: 'black' }}>
                    <ClassCart
                        img={img3}
                        title="advance gym"
                    />

                </Link>
                <Link to="/cardio-training" style={{ textDecoration: 'none', color: 'black' }}>
                    <ClassCart
                        img={img4}
                        title="cardio training"
                    />

                </Link>
                <Link to="/strength-training" style={{ textDecoration: 'none', color: 'black' }}>

                    <ClassCart
                        img={img5}
                        title="strength training"
                    />
                </Link>
                <Link to="/psycho-training2" style={{ textDecoration: 'none', color: 'black' }}>
                    <ClassCart
                        img={img6}
                        title="psycho training"
                    />
                </Link>
            </div>
            <Footer />

        </div>
    );
};

export default Classes;