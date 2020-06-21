import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Classes from './Components/Classes/Classes';
import NotMatch from './Components/NotMatch/NotMatch';
import ServiceNotAvailable from './Components/ServiceNotAvailable/ServiceNotAvailable';
import AdvanceGym from './Components/AdvanceGym/AdvanceGym';
import Pricing from './Components/Pricing/Pricing';




function App() {

  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/psycho-training">
            <ServiceNotAvailable title="psycho-training" />
          </Route>
          <Route path="/advance-gym">
            <AdvanceGym title="advance gym" />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>

          <Route path="*">
            <NotMatch />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
