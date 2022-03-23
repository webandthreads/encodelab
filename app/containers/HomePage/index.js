/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import background from '../../images/background/homepage.jpg';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <section
      className="wow fadeIn p-0 parallax sm-background-image-center"
      data-stellar-background-ratio="0.5"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <div className="opacity-extra-medium bg-black" />
        <div className="container-fluid position-relative full-screen">
          <div className="slider-typography">
            <div className="slider-text-middle-main">
              <div className="slider-text-bottom">
                <div className="col-12 col-xl-6 col-lg-7 float-left bg-deep-pink-opacity-light padding-six-lr lg-padding-seven-lr padding-five-tb sm-padding-30px-all last-paragraph-no-margin">
                  <div className="box-separator-line width-180px bg-white lg-width-120px md-width-90px d-none d-lg-block" />
                  <h3 className="font-weight-600 alt-font text-white-2 width-95 md-width-100">
                    <FormattedMessage {...messages.header} />
                  </h3>
                  <p className="text-large font-weight-300 text-white-2 width-75 lg-width-85 md-width-95 sm-width-100 d-none d-md-block">
                    <FormattedMessage {...messages.p1} />
                    <br />
                    <br />
                    <FormattedMessage {...messages.p2} />
                    <ul>
                      <li>The role of emotion in decision-making.</li>
                      <li>Apathy and disorders of goal directed behaviour in Alzheimer’s Disease and Stroke.</li>
                      <li>Neurocognitive correlates of future time perspective during sleep and selfawakening.</li>
                      <li>Self-referenced memory in Alzheimer’s disease.</li>
                      <li>Neuropsychological assessment and computer based cognitive rehabilitation training in stroke.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  /* return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="username"
                type="text"
                placeholder="mxstbr"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form>
          <ReposList {...reposListProps} />
        </Section>
      </div>
    </article>
  ); */
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
