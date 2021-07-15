
import './App.css';
import React from 'react'
import {BrowserRouter as Router ,Route } from 'react-router-dom'
import Navbar from "./components/Navbar.js"                                                                                                             
import Mainpage from './components/Mainpage.js';
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route path="/" component={Mainpage} />    
      </Router>
    </div>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

export default App;
