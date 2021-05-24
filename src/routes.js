import React from 'react';

import { AboutMe } from './components/AboutMe/AboutMe'
import { Experience } from './components/Experience/Experience'

import { NavBar } from './components/NavBar/NavBar';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

export const Routes = () => {
    const location = useLocation().pathname.toString().substring(1);
  return (
    <div>
        <NavBar page={location}/>
        <Switch>
            <Route exact path='/aboutme'>
                <AboutMe />
            </Route>
            <Route path='/experience'>
                <Experience />
            </Route>
            <Route path='/work'>
                <AboutMe />
            </Route>
            <Route path='/contact'>
                <AboutMe />
            </Route>
        </Switch>
    </div>
  );
};