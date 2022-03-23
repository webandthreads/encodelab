/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import ProjectPage from 'containers/ProjectPage/Loadable';
import PeoplePage from 'containers/PeoplePage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import ConsentPage from 'containers/ConsentPage/Loadable';
import ParticipationsPage from 'containers/ParticipationsPage/Loadable';
import ParticipatePage from 'containers/ParticipatePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - EmotioN Cognition and Decision making laboratory"
        defaultTitle="EmotioN Cognition and Decision making laboratory"
      >
        <meta
          name="description"
          content="ENCODE Lab – an interactive EmotioN Cognition and Decision making laboratory"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/research" component={ProjectsPage} />
        <Route
          path="/research/:projectId"
          render={props => <ProjectPage {...props} />}
        />
        <Route path="/people" component={PeoplePage} />
        <Route path="/consent" component={ConsentPage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/participate" component={ParticipationsPage} />
        <Route
          path="/participate/:projectId"
          render={props => <ParticipatePage {...props} />}
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
