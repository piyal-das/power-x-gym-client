import React from 'react';
import './App.scss';
import AdvanceGym from './components/AdvanceGym/AdvanceGym/AdvanceGym';
import Classes from './components/Classes/Classes/Classes';
import Home from './components/Home/Home/Home';
import Membership from './components/Membership/Membership/Membership';
import Pricing from './components/Pricing/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Classes></Classes>
      {/* <AdvanceGym></AdvanceGym> */}
      <Pricing></Pricing>
      <Membership></Membership>
    </div>
  );
}

export default App;
