// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
// import ReactDOM from "react-dom";


//contents
import Home from './content/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './content/About';
import Education from './content/Education';
import Skills from './content/Skills';
import Contact from './content/Contract';

function App() {
  return (
    
    <Router>
    <div className="App">
    <Navbar />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
     </Router>
  );
}

export default App;
