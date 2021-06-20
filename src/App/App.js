import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//other imports
import SignIn from '../SignIn/signIn'
import Register from '../Register/register';
import Home from '../Home/home';

function App() {
  return (
    <Router>
        <Route exact path = "/" component = {SignIn} /> 
        <Route exact path = "/register" component = {Register} />
        <Route exact path = "/home" component = {Home} />
    </Router>
    
  );
}

export default App;
