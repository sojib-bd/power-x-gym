import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import TrainingSection from './Components/TrainingSection/TrainingSection';
import MarketingSpeech from './Components/MarketingSpeech/MarketingSpeech';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <Navigation />
      <Banner />
      <Services />
      <About />
      <TrainingSection />
      <MarketingSpeech />

      <Footer />
    </div>
  );
}

export default App;
