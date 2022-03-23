/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Wrapper from './Wrapper';
import Breadcrump from '../../components/Breadcrump';

import background from '../../images/background/contact.jpg';

const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export default function ContactPage() {
  return (
    <Wrapper>
      <Breadcrump links={links} />
      <section className="wow fadeIn big-section contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <span className="alt-font text-small text-uppercase">
                We would love to work with you
              </span>
              <h2 className="alt-font font-weight-700 letter-spacing-minus-1 text-extra-dark-gray">
                How we can help
              </h2>
              <p className="width-75 mx-auto sm-width-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since. Lorem Ipsum has been the industry. Lorem Ipsum
                is simply dummy text of the printing and industry.
              </p>
              <a
                href="#start-your-project"
                className="btn btn-large btn-transparent-dark-gray margin-10px-top inner-link"
              >
                Start your Project
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="no-padding bg-extra-dark-gray contact">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-12 col-lg-6 p-0 cover-background md-height-450px sm-height-350px wow fadeInLeft"
              style={{ backgroundImage: `url(${background})` }}
            />
            <div className="col-12 col-lg-6 p-0 wow fadeInRight">
              <div className="row m-0">
                {}
                <div className="col-12 col-md-6 bg-extra-dark-gray d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin">
                  <i className="icon-map text-deep-pink icon-medium margin-25px-bottom" />
                  <div className="text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom">
                    Contact Address
                  </div>
                  <p className="width-60 lg-width-80 mx-auto text-medium">
                    301 The Greenhouse, Custard Factory, London, E2 8DY.
                  </p>
                </div>
                {}
                {}
                <div className="col-12 col-md-6 bg-black d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin">
                  <i className="icon-chat text-deep-pink icon-medium margin-25px-bottom" />
                  <div className="text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom">
                    Let's Talk
                  </div>
                  <p className="mx-auto text-medium mb-0">
                    Phone: 1-800-222-000
                  </p>
                  <p className="mx-auto text-medium">Fax: 1-800-222-002</p>
                </div>
                {}
                {}
                <div className="col-12 col-md-6 bg-black d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin">
                  <i className="icon-envelope text-deep-pink icon-medium margin-25px-bottom" />
                  <div className="text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom">
                    Email Us
                  </div>
                  <p className="mx-auto text-medium mb-0">
                    <a href="mailto:info@domain.com">info@domain.com</a>
                  </p>
                  <p className="mx-auto text-medium">
                    <a href="mailto:hire@domain.com">hire@domain.com</a>
                  </p>
                </div>
                {}
                {}
                <div className="col-12 col-md-6 bg-extra-dark-gray d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin">
                  <i className="icon-clock text-deep-pink icon-medium margin-25px-bottom" />
                  <div className="text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom">
                    Working Hours
                  </div>
                  <p className="mx-auto text-medium mb-0">
                    Mon to Sat - 9 AM to 11 PM
                  </p>
                  <p className="mx-auto text-medium">Sunday - 10 AM to 6 PM</p>
                </div>
                {}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wow fadeIn contact" id="start-your-project">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-md-8 margin-eight-bottom md-margin-40px-bottom sm-margin-30px-bottom text-center last-paragraph-no-margin">
              <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase">
                tell us about your project
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy
                text ever since. Lorem Ipsum has been the industry. Lorem Ipsum
                is simply dummy text.
              </p>
            </div>
          </div>
          <form
            id="project-contact-form"
            action="javascript:void(0)"
            method="post"
          >
            <div className="row">
              <div className="col-12">
                <div id="success-project-contact-form" className="mx-0" />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name *"
                  className="big-input"
                />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="big-input"
                />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="E-mail *"
                  className="big-input"
                />
              </div>
              <div className="col-12 col-lg-6">
                <div className="select-style big-select">
                  <select
                    name="budget"
                    id="budget"
                    className="bg-transparent mb-0"
                  >
                    <option value>Select your budget</option>
                    <option value="$500 - $1000">$500 - $1000</option>
                    <option value="$1000 - $2000">$1000 - $2000</option>
                    <option value="$2000 - $5000">$2000 - $5000</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Describe your project"
                  rows={6}
                  className="big-textarea"
                  defaultValue=""
                />
              </div>
              <div className="col-12 text-center">
                <button
                  id="project-contact-us-button"
                  type="submit"
                  className="btn btn-transparent-dark-gray btn-large margin-20px-top"
                >
                  send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Wrapper>
  );
}
