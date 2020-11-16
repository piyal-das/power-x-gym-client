import React, { createContext, useState } from 'react';
import './App.scss';
import AdvanceGym from './components/AdvanceGym/AdvanceGym/AdvanceGym';
import Classes from './components/Classes/Classes/Classes';
import Home from './components/Home/Home/Home';
import Membership from './components/Membership/Membership/Membership';
import Pricing from './components/Pricing/Pricing/Pricing';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const GymContext = createContext();

function App() {
  const [gymDetails, setGymDetails] = useState([]);

  return (
    <GymContext.Provider value = {{ gymDetails, setGymDetails }} className='app'>
      <Router className="App">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="/advanceGym">
            <AdvanceGym></AdvanceGym>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
          <Route path="/membership">
            <Membership></Membership>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </GymContext.Provider>
  );
}

export default App;
