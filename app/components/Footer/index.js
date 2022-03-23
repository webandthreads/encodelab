import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

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
const links = [
  {
    url: '/blog',
    title: 'Blog',
  },
  {
    url: '/contact',
    title: 'Contact Us',
  },
  {
    url: '/publications',
    title: 'Publications',
  },
  {
    url: '/privacy-policy',
    title: 'Privacy Policy',
  },
  {
    url: '/participation-consent',
    title: 'Participation Consent',
  },
];

function Footer() {
  return (
    <footer className="footer-standard-dark bg-extra-dark-gray">
      <div className="footer-widget-area padding-five-tb sm-padding-30px-tb">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 widget border-right border-color-medium-dark-gray md-no-border-right md-margin-30px-bottom sm-text-center">
              <a
                href="index.html"
                className="margin-20px-bottom d-inline-block"
              >
                <h6 className="text-white alt-font font-weight-600">
                  <FormattedMessage {...messages.logo} />
                </h6>
              </a>
              <p className="text-small width-95 sm-width-100">
                <FormattedMessage {...messages.summary} />
              </p>
              <div className="social-icon-style-8 d-inline-block vertical-align-middle">
                <ul className="small-icon no-margin-bottom">
                  {socialMedia.map(social => (
                    <li key={social.url}>
                      <a
                        href={social.url}
                        title={social.title}
                        target="_blank"
                        className={`${social.name} text-white-2`}
                      >
                        <i
                          className={`fab ${social.icon}`}
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 widget border-right border-color-medium-dark-gray padding-45px-left md-padding-15px-left md-no-border-right md-margin-30px-bottom text-center text-md-left">
              <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-10px-bottom font-weight-600">
                Additional Links
              </div>
              <ul className="list-unstyled">
                {links.map(link => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      title={link.title}
                      className="text-small"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 widget border-right border-color-medium-dark-gray padding-45px-left md-padding-15px-left md-clear-both md-no-border-right sm-margin-30px-bottom text-center text-md-left">
              <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-10px-bottom font-weight-600">
                Contact Info
              </div>
              <p className="text-small d-block margin-15px-bottom width-80 sm-width-100">
                <FormattedMessage {...messages.logo} />
                <br /> Rondebosch, Cape Town, 7700, South Africa.
              </p>
              <div className="text-small">
                Email:
                <a href="mailto:contact@encodelab.org">contact@encodelab.org</a>
              </div>
              <div className="text-small">Phone: +27214567890</div>
            </div>
            <div className="col-lg-3 col-md-6 widget padding-45px-left md-padding-15px-left text-center text-md-left">
              <div className="widget-title alt-font text-small text-medium-gray text-uppercase margin-20px-bottom font-weight-600">
                Instagram portfolio
              </div>
              <div className="instagram-follow-api">
                <ul id="instaFeed-footer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-footer padding-50px-tb text-center sm-padding-30px-tb">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-left text-small text-center">
              © <FormattedMessage {...messages.logo} />
            </div>
            <div className="col-md-6 text-md-right text-small text-center">
              <a href="/participation-consent" className="text-dark-gray">
                Participation Consent&nbsp;
              </a>
              |&nbsp;
              <a href="/privacy-policy" className="text-dark-gray">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
