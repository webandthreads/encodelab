import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
// import LocaleToggle from 'containers/LocaleToggle'; /TODO: Figure this out

const socialMedia = [
  {
    url: 'www.facebook.com',
    title: 'Facebook',
    icon: 'fa-facebook-f',
  },
  {
    url: 'www.twitter.com',
    title: 'Twitter',
    icon: 'fa-twitter',
  },
  {
    url: 'www.plus.google.com',
    title: 'Google Puls',
    icon: 'fa-google-plus-g',
  },
  {
    url: 'www.instagram.com',
    title: 'Instagram',
    icon: 'fa-instagram',
  },
];
const navLinks = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/research',
    title: 'Research',
  },
  {
    url: '/participate',
    title: 'Participate',
  },
  {
    url: '/people',
    title: 'People',
  },
  {
    url: '/contact',
    title: 'Contact',
  },
];
const contacts = {
  phone: '+27214567890',
  email: 'contact@encodelab.org',
};

function Header() {
  return (
    <header className="header-with-topbar fixed-topbar">
      <div className="top-header-area bg-black padding-10px-tb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-uppercase alt-font d-flex align-items-center justify-content-center justify-content-md-start">
              <a
                href={`tel:${contacts.phone}`}
                className="text-link-white-2 line-height-normal"
                title={`Call us ${contacts.phone}`}
              >
                <FormattedMessage {...messages.call_us} /> {contacts.phone}
              </a>
              <div className="separator-line-verticle-extra-small bg-dark-gray display-inline-block margin-two-half-lr position-relative vertical-align-middle" />
              <a
                href={`mailto:${contacts.email}`}
                className="text-link-white-2 line-height-normal"
                title={contacts.email}
              >
                {contacts.email}
              </a>
            </div>
            <div className="col-md-6 d-none d-md-flex align-items-center justify-content-end">
              <div className="icon-social-very-small display-inline-block line-height-normal">
                {socialMedia.map(social => (
                  <a
                    key={social.url}
                    href={social.url}
                    title={social.title}
                    target="_blank"
                    className="text-link-white-2"
                  >
                    <i className={`fab ${social.icon}`} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-default bootsnav navbar-fixed-top header-light-transparent background-transparent nav-box-width navbar-expand-lg">
        <div className="container nav-header-container">
          <div className="col-auto pl-lg-0">
            <a href="/" title="ENCODE Lab" className="logo">
              <h4 className="text-extra-dark-gray alt-font font-weight-600 inline">
                <FormattedMessage {...messages.title} />
              </h4>
            </a>
          </div>
          <div className="col accordion-menu pr-0 pr-md-3">
            <button
              type="button"
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse-toggle-1"
            >
              <span className="sr-only">toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbar-collapse-toggle-1"
            >
              <ul
                id="accordion"
                className="nav navbar-nav navbar-left no-margin alt-font text-normal"
                data-in="fadeIn"
                data-out="fadeOut"
              >
                {navLinks.map(link => (
                  <li className="megamenu-fw" key={link.url}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
