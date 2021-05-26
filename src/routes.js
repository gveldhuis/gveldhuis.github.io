import React from 'react';

import { AboutMe } from './components/AboutMe/AboutMe'
import { Experience } from './components/Experience/Experience'

import { NavBar } from './components/NavBar/NavBar';
import { Route, Switch, useLocation } from 'react-router-dom';

import { ExperienceContent } from './components/ExperienceContent/ExperienceContent'
import { companies } from './components/Experience/ExperienceData'



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
                {companies.map(company => (
                    <Route path={company.path}>
                        <ExperienceContent experienceblock={company} />
                    </Route>
                ))}
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