import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//other imports
import SignIn from '../SignIn/signIn'

function App() {
  return (
    <Router>
        <Route exact path = "/" component = {SignIn} /> 
    </Router>
    
  );
}

export default App;
