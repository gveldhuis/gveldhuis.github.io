import React from 'react';
import './App.css';


import { Experience } from '../Experience/Experience';
import { AboutMe } from '../AboutMe/AboutMe';
import { NavBar } from '../NavBar/NavBar';
import { Intro } from '../Intro/Intro';


/*
import { AboutMe } from '../AboutMe/AboutMe';
import { NavBar } from '../NavBar/NavBar';
import { Intro } from '../Intro/Intro';
import { Skills } from '../Skills/Skills';
import { Work } from '../Work/Work';*/

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Intro />
        <AboutMe />
        <Experience />

        
        {/*
        
        <NavBar />
        <Intro />
        <AboutMe />
        
        
        
        <Skills />
        <Work />
        */}
      </div>
    );
  }
}

export default App;
