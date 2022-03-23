/*
 * ProjectPage
 *
 * Project Information Page
 */
import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Breadcrump from '../../components/Breadcrump';

import projects from '../ProjectsPage/projects.json';

function ProjectPage({ match }) {
  const {
    params: { projectId },
  } = match;

  // Fetch/find the project
  let project = projects.find(p => p.slug === projectId);
  if (!project) {
    [project] = projects;
  }

  const links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Research',
      url: '/research',
    },
    {
      title: project.title,
      url: project.url,
    },
  ];

  return (
    <Wrapper>
      <Breadcrump links={links} />
      <section className="padding-35px-tb">
        <div className="container">
          <div className="row">
            <main className="col-12 col-lg-9 right-sidebar md-margin-60px-bottom sm-margin-40px-bottom pl-0 md-no-padding-right">
              <div className="col-12 blog-details-text last-paragraph-no-margin">
                <img
                  src={project.image.url}
                  alt={project.title}
                  className="width-100 margin-45px-bottom"
                />
                <p>
                  WHAT!!!!!!Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                  <strong className="text-extra-dark-gray">
                    Lorem Ipsum has been the industry's
                  </strong>
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more{" "}
                  <u>recently with desktop publishing</u> software like aldus
                  pagemaker including versions.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum, you need to be sure there isn't anything embarrassing
                  hidden in the middle of text. All the lorem ipsum generators on
                  the internet tend to repeat predefined chunks as necessary,
                  making this the{" "}
                  <strong className="text-extra-dark-gray">
                    first true generator on the internet.
                  </strong>{" "}
                  It uses a dictionary of over 200 Latin words, combined with a{" "}
                  <u>handful of model sentence structures,</u> to generate Lorem
                  Ipsum which looks reasonable. The generated Lorem Ipsum is
                  therefore always free from repetition, injected humour.
                </p>
                <blockquote className="border-color-deep-pink">
                  <p>
                    Reading is not only informed by what’s going on with us at
                    that moment, but also governed by how our eyes and brains work
                    to process information. What you see and what you’re
                    experiencing as you read these words is quite different.
                  </p>
                  <footer>Jason Maria</footer>
                </blockquote>
                <img
                  src="http://placehold.it/900x600"
                  alt=""
                  className="width-100 margin-45px-bottom"
                />
                {}
                <p>
                  <span className="first-letter first-letter-block bg-extra-dark-gray text-white-2">
                    M
                  </span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. It has survived not only five centuries. Simply dummy
                  text of the printing and typesetting industry. It has survived
                  not only five centuries. There are many variations of passages
                  of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words
                  which don't look even slightly believable. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem Ipsum
                  has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                {}
                <figure className="wp-caption alignleft">
                  <img alt="" src="http://placehold.it/350x255" />
                  <figcaption className="wp-caption-text">
                    There is no sincerer love than the love of food.
                  </figcaption>
                </figure>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of
                  Lorem Ipsum. There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered alteration in
                  some form, by injected humour, or randomised words which don't
                  look even slightly believable. If you are going to use a passage
                  of Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the lorem ipsum
                  generators on the internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the internet.
                  It uses a dictionary of over 200 Latin words, combined with a
                  handful of model sentence structures, to generate Lorem Ipsum
                  which looks reasonable. The generated Lorem Ipsum is therefore
                  always free from repetition, injected humour.
                </p>
                <span className="text-extra-dark-gray font-weight-500 margin-15px-bottom d-block text-medium">
                  You can never quit. Winners never quit, and quitters never win
                </span>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum, you need to be sure there isn't anything embarrassing
                  hidden in the middle of text. All the lorem ipsum generators on
                  the internet tend to repeat predefined chunks as necessary,
                  making this the first true generator on the internet. It uses a
                  dictionary of over 200 Latin words, combined with a handful of
                  model sentence structures, to generate Lorem Ipsum which looks
                  reasonable. The generated Lorem Ipsum is therefore always free
                  from repetition, injected humour.
                </p>
              </div>
            </main>
            <aside className="col-12 col-lg-3 float-right">
                <div className="margin-45px-bottom sm-margin-25px-bottom">
                  <div className="text-extra-dark-gray margin-20px-bottom alt-font text-uppercase text-small font-weight-600 aside-title">
                    <span>About the Researcher</span>
                  </div>
                  <a href="about-me.html">
                    <img
                      src="http://placehold.it/800x533"
                      alt=""
                      className="margin-25px-bottom"
                    />
                  </a>
                  <p className="margin-20px-bottom text-small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard.
                  </p>
                  <a
                    className="btn btn-very-small btn-dark-gray text-uppercase"
                    href="about-me.html"
                  >
                    More about the Researcher
                  </a>
                </div>
                <div className="margin-50px-bottom">
                  <div className="text-extra-dark-gray margin-20px-bottom alt-font text-uppercase font-weight-600 text-small aside-title">
                    <span>On Social Media</span>
                  </div>
                  <div className="social-icon-style-1 text-center">
                    <ul className="extra-small-icon">
                      <li>
                        <a
                          className="facebook"
                          href="http://facebook.com"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          href="http://twitter.com"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="google"
                          href="http://google.com"
                          target="_blank"
                        >
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="dribbble"
                          href="http://dribbble.com"
                          target="_blank"
                        >
                          <i className="fab fa-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="linkedin"
                          href="http://linkedin.com"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="margin-45px-bottom sm-margin-25px-bottom">
                  <div className="text-extra-dark-gray margin-25px-bottom alt-font text-uppercase font-weight-600 text-small aside-title">
                    <span>tags cloud</span>
                  </div>
                  <div className="tag-cloud">
                    <a href="blog-grid.html">ADVERTISEMENT</a>
                    <a href="blog-grid.html">ARTISTRY</a>
                    <a href="blog-grid.html">BLOG</a>
                    <a href="blog-grid.html">CONCEPTUAL</a>
                    <a href="blog-grid.html">DESIGN</a>
                    <a href="blog-grid.html">FASHION</a>
                    <a href="blog-grid.html">INSPIRATION</a>
                    <a href="blog-grid.html">SMART</a>
                    <a href="blog-grid.html">QUOTES</a>
                    <a href="blog-grid.html">UNIQUE</a>
                    <a href="blog-grid.html">CONCEPTS</a>
                  </div>
                </div>
                <div className="margin-45px-bottom sm-margin-25px-bottom">
                  <div className="text-extra-dark-gray margin-25px-bottom alt-font text-uppercase font-weight-600 text-small aside-title">
                    <span>Related Research</span>
                  </div>
                  <ul className="latest-post position-relative">
                    <li className="media">
                      <figure>
                        <a href="blog-masonry.html">
                          <img src="http://placehold.it/480x358" alt="" />
                        </a>
                      </figure>
                      <div className="media-body text-small">
                        <a
                          href="blog-masonry.html"
                          className="text-extra-dark-gray"
                        >
                          <span className="d-inline-block margin-5px-bottom">
                            Traveling abroad will change you forever
                          </span>
                        </a>
                        <span className="d-block text-medium-gray text-small">
                          April 30, 2016
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <figure>
                        <a href="blog-masonry.html">
                          <img src="http://placehold.it/480x358" alt="" />
                        </a>
                      </figure>
                      <div className="media-body text-small">
                        <a
                          href="blog-masonry.html"
                          className="text-extra-dark-gray"
                        >
                          <span className="d-inline-block margin-5px-bottom">
                            Having a new perspec-tive on new york city
                          </span>
                        </a>
                        <span className="d-block text-medium-gray text-small">
                          March 10, 2016
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <figure>
                        <a href="blog-masonry.html">
                          <img src="http://placehold.it/480x358" alt="" />
                        </a>
                      </figure>
                      <div className="media-body text-small">
                        <a
                          href="blog-masonry.html"
                          className="text-extra-dark-gray"
                        >
                          <span className="d-inline-block margin-5px-bottom">
                            The incredible talents of street performers
                          </span>
                        </a>
                        <span className="d-block text-medium-gray text-small">
                          March 05, 2016
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <figure>
                        <a href="blog-masonry.html">
                          <img src="http://placehold.it/480x358" alt="" />
                        </a>
                      </figure>
                      <div className="media-body text-small">
                        <a
                          href="blog-masonry.html"
                          className="text-extra-dark-gray"
                        >
                          <span className="d-inline-block margin-5px-bottom">
                            Praesent placerat risus quis eros
                          </span>
                        </a>
                        <span className="d-block text-medium-gray text-small">
                          March 01, 2016
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

ProjectPage.propTypes = {
  match: PropTypes.object,
};

export default ProjectPage;
