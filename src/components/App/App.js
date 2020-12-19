import React from 'react';
import './App.css';

import { NavBar } from '../NavBar/NavBar';
import { Intro } from '../Intro/Intro';
import { AboutMe } from '../AboutMe/AboutMe';
import { Experience } from '../Experience/Experience';
import { Skills } from '../Skills/Skills';
import { Work } from '../Work/Work';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Intro />
        <AboutMe />
        <Experience />
        <Skills />
        <Work />
      </div>
    );
  }
}

export default App;
