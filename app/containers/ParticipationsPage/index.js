/*
 * ProjectsPage
 *
 * List all the features
 */
import React from 'react';

import Wrapper from './Wrapper';
import Breadcrump from '../../components/Breadcrump';

import projects from '../ProjectsPage/projects.json';

const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Participate in our experiments',
    url: '/participate',
  },
];

export default function ParticipationsPage() {
  const participations = projects.filter(
    project => project.participate === true,
  );
  return (
    <Wrapper>
      <Breadcrump links={links} />
      <section className="wow fadeIn bg-extra-dark-gray padding-35px-tb">
        <div className="container">
          <div className="row hover-option4 blog-post-style3">
            {participations.map(participation => (
              <div className="grid-item col-12 col-md-4 sm-margin-30px-bottom wow fadeInUp" key={participation.id}>
                <div className="blog-post bg-light-gray">
                  <div className="blog-post-images overflow-hidden position-relative">
                    <a href={participation.participateUrl}>
                      <img
                        src={participation.image.url}
                        alt={participation.title}
                      />
                      <div className="blog-hover-icon">
                        <span className="text-extra-large font-weight-300">
                          +
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="post-details padding-40px-all sm-padding-20px-lr sm-padding-30px-tb">
                    <a
                      href={participation.participateUrl}
                      className="alt-font post-title text-medium text-extra-dark-gray w-100 d-block lg-width-100 margin-15px-bottom"
                    >
                      {participation.title}
                    </a>
                    <p> {participation.text} </p>
                    <div className="separator-line-horrizontal-full bg-medium-gray margin-20px-tb" />
                    <div className="author">
                      <span className="text-medium-gray text-uppercase text-extra-small d-xl-inline-block d-block md-margin-10px-top">
                        by&nbsp;
                        <a
                          href="/people/tadious-bohwasi"
                          className="text-medium-gray"
                        >
                          {participation.researcher}
                        </a>
                        &nbsp;|&nbsp;{participation.publishDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
