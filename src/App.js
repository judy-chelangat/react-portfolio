import './index.css';
import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/contacts' element={<Contact />}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
