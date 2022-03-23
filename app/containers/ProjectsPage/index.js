/*
 * ProjectsPage
 *
 * List all the features
 */
import React from 'react';

import Wrapper from './Wrapper';
import Breadcrump from '../../components/Breadcrump';

import projects from './projects.json';

const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Research',
    url: '/research',
  },
];

export default function ProjectsPage() {
  return (
    <Wrapper>
      <Breadcrump links={links} />
      <section className="wow fadeIn bg-extra-dark-gray padding-35px-tb">
        <div className="container">
          <div className="row hover-option4 blog-post-style3">
            {projects.map(project => (
              <div className="grid-item col-12 col-md-4 sm-margin-30px-bottom wow fadeInUp">
                <div className="blog-post bg-light-gray">
                  <div className="blog-post-images overflow-hidden position-relative">
                    <a href={project.url}>
                      <img src={project.image.url} alt={project.title} />
                      <div className="blog-hover-icon">
                        <span className="text-extra-large font-weight-300">
                          +
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="post-details padding-40px-all sm-padding-20px-lr sm-padding-30px-tb">
                    <a
                      href={project.url}
                      className="alt-font post-title text-medium text-extra-dark-gray w-100 d-block lg-width-100 margin-15px-bottom"
                    >
                      {project.title}
                    </a>
                    <p> {project.text} </p>
                    <div className="separator-line-horrizontal-full bg-medium-gray margin-20px-tb" />
                    <div className="author">
                      <span className="text-medium-gray text-uppercase text-extra-small d-xl-inline-block d-block md-margin-10px-top">
                        by&nbsp;
                        <a
                          href="/people/tadious-bohwasi"
                          className="text-medium-gray"
                        >
                          {project.researcher}
                        </a>
                        &nbsp;|&nbsp;{project.publishDate}
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
