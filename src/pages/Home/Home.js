import React from 'react';
import '../Styles/Page.css'

import { NavBar } from '../../components/NavBar/NavBar';
import { AboutMe } from '../../components/AboutMe/AboutMe'

export class Home extends React.Component {
  render() {
    return (
      <div className='Format'>
        <NavBar page="AboutMe" />
        <AboutMe />
      </div>
    );
  }
}
