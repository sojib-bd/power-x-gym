import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Classes from './Components/Classes/Classes';
import NotMatch from './Components/NotMatch/NotMatch';




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
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
