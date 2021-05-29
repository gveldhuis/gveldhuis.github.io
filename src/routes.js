import React from 'react';

import { AboutMe } from './components/AboutMe/AboutMe'
import { Experience } from './components/Experience/Experience'
import { Work } from './components/Work/Work'

import { NavBar } from './components/NavBar/NavBar';
import { Route, Switch, useLocation } from 'react-router-dom';

import { ExperienceContent } from './components/ExperienceContent/ExperienceContent'
import { companies } from './components/Experience/ExperienceData'

import { WorkContent } from './components/WorkContent/WorkContent'
import { workProjects } from './components/Work/WorkData'

import { Contact } from './components/Contact/Contact'





export const Routes = () => {
    const location = useLocation().pathname.toString().substring(1);

  return (
    <div>
        <NavBar page={location}/>
        <Switch>
            <Route exact path='/'>
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
                <Work />
                {workProjects.map(project => (
                    <Route path={project.path}>
                        <WorkContent workblock={project} />
                    </Route>
                ))}
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
        </Switch>
    </div>
  );
};