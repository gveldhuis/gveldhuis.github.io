import React from 'react';
import './App.css';



import { Work } from '../Work/Work';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { AboutMe } from '../AboutMe/AboutMe';
import { NavBar } from '../NavBar/NavBar';
import { Intro } from '../Intro/Intro';
import Contact from '../Contact/Contact';

/*




*/

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar page="AboutMe" />
        {/*<Intro />
        <AboutMe />
        <Experience />
        <Skills />
        <Work />
        <Contact />*/}



        
        {/*
        
        */}
      </div>
    );
  }
}

export default App;
