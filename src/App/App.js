import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//other imports
import SignIn from '../SignIn/signIn'
import Register from '../Register/register';

function App() {
  return (
    <Router>
        <Route exact path = "/" component = {SignIn} /> 
        <Route exact path = "/register" component = {Register} />
    </Router>
    
  );
}

export default App;
