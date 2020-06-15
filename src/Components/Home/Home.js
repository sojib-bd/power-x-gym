import React from 'react';
import Navigation from '../Navigation/Navigation';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import About from '../About/About';
import TrainingSection from '../TrainingSection/TrainingSection';
import MarketingSpeech from '../MarketingSpeech/MarketingSpeech';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <About />
            <TrainingSection />
            <MarketingSpeech />
            <Footer />
        </div>
    );
};

export default Home;