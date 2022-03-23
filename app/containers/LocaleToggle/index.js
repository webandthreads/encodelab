/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Toggle from 'components/Toggle';
import Wrapper from './Wrapper';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export function LocaleToggle(props) {
  const [showLocaleOptions, setShowLocaleOptions] = React.useState(false);
  const setLocale = locale => {
    changeLocale(locale);
    setShowLocaleOptions(false);
    return false;
  };
  return (
    <Wrapper>
      <Toggle
        value={props.locale}
        values={appLocales}
        messages={messages}
        onToggle={props.onLocaleToggle}
      />
      <div className="btn-group dropdown-style-1">
        <button
          id="local-toggle"
          type="button"
          onClick={() => setShowLocaleOptions(!showLocaleOptions)}
          className="btn dropdown-toggle sm-width-100"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {props.locale} <span className="caret" />
        </button>
        {showLocaleOptions && (
          <ul className="dropdown-menu show">
            {appLocales.map(value => (
              <li key={value}>
                <a href="#" title={value} onClick={() => setLocale(value)}>
                  <span className={`icon-country ${value}`} />
                  {value}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
