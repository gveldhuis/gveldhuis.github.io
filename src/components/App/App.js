import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import './App.css';

import { NavBar } from '../NavBar/NavBar';
import { Intro } from '../Intro/Intro';
import { AboutMe } from '../AboutMe/AboutMe';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Intro />
        <AboutMe />
      </div>
    );
  }
}

export default App;
