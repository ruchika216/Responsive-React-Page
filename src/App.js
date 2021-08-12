import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Features from './pages/Features';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/feature' component={Features} />
        <Route path='/destination' component={Destination} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;