import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import SkillsPage from './components/skills/SkillsPage';
import ProjectsPage from './components/project/ProjectsPage';
import ManageProjectPage from './components/project/ManageProjectPage'; //eslint-disable-line import/no-named-as-default
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="skills" component={ SkillsPage } />
    <Route path="projects" component={ ProjectsPage } />
    <Route path="project" component={ ManageProjectPage } />
    <Route path="project/:id" component={ ManageProjectPage } />
    <Route path="about" component={ AboutPage } />
    <Route path="contact" component={ ContactPage } />
  </Route>
);
