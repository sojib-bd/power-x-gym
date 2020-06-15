import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import TrainingSection from './Components/TrainingSection/TrainingSection';

function App() {
  return (
    <div >
      <Navigation />
      <Banner />
      <Services />
      <About />
      <TrainingSection />
    </div>
  );
}

export default App;
