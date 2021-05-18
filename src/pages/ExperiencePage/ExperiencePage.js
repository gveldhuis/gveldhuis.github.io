import React from 'react';
import '../Styles/Page.css'

import { NavBar } from '../../components/NavBar/NavBar';
import { Experience } from '../../components/Experience/Experience'

class ExperiencePage extends React.Component {
  render() {
    return (
      <div className='Format'>
        <NavBar page="Experience" />
        <Experience />
      </div>
    );
  }
}

export default Experience;