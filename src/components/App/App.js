import React from 'react';
import './App.css';
import '../../index.css'

import { HomePage } from '../../pages/HomePage/HomePage';


class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
