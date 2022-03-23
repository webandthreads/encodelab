import React from 'react';
import PropTypes from 'prop-types';

function Breadcrump({ links }) {
  const current = links.pop();
  return (
    <section className="wow fadeIn bg-extra-light-gray page-title-small top-space breadcrump">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-md-6 text-center text-md-left">
            <h1 className="alt-font text-extra-dark-gray font-weight-600 mb-0 text-uppercase">
              {current.title}
            </h1>
          </div>
          <div className="col-xl-4 col-md-6 breadcrumb alt-font text-small justify-content-center justify-content-md-end sm-margin-10px-top">
            <ul className="text-center text-md-right">
              {links.map(link => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    title={link.title}
                    className="text-dark-gray"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="text-dark-gray">{current.title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Breadcrump.propTypes = {
  links: PropTypes.array,
};

export default Breadcrump;
