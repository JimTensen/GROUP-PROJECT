import React from 'react'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Vault from './Components/Vault';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/vault' component={Vault} />
        <Route path='/contact' component={Contact} />
  </Router>
  );
}

export default App;
