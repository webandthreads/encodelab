/*
 * PeoplePage
 *
 * List all the features
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Breadcrump from '../../components/Breadcrump';

import messages from './messages';
import Wrapper from './Wrapper';

import background from '../../images/background/people.jpg';
import progress from '../../images/people/progress.jpg';
import nicole from '../../images/people/nicole.jpg';
import tadious from '../../images/people/tadious.jpg';
import placeholder from '../../images/people/placeholder.png';

const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'People',
    url: '/people',
  },
];

const people = [
  {
    name: 'Progress Njomboro, PHD',
    title: 'Principal Investigator',
    image: placeholder,
    description: `
    I am a cognitive neuropsychologist with interests in the diagnosis and rehabilitation of challenges in
    thinking, emotion, and behaviour that accompany the neurological changes in acquired brain
    damage.
    `,
  },
  {
    name: 'Debra Machando',
    title: 'Research Student',
    image: placeholder,
    description: `
    My main research interests are in mental health system strengthening and neurocognitive
    assessments. For my PhD research, I am validating and developing norms for a neurocognitive
    screen to assess cognitive fall-outs in people with acquired brain damage, e.g. stroke.
    `,
  },
  {
    name: 'Nicole McIver',
    title: 'Neuropsychology Master’s Student',
    image: nicole,
    description: `
    I am interested in the way memory processing changes when encoding information about the self, versus the other. I
    am currently investigating the way that self-related memory encoding changes in Alzheimer’s
    Disease and its clinical neuropsychological implications. I am also interested in the mental
    representation of the self in Autism Spectrum Disorders.
    `,
  },
  {
    name: 'Prudence Lehlogonolo Moloto',
    title: 'Research Student',
    image: placeholder,
    description: `
    Broadly, in my research I investigate the relationship between language experience (mono-, bi- and
    multi-lingualism) and executive cognitive functioning. Related areas of interest include the influence
    of language experience on social cognition, particularly theory of mind and moral reasoning.
    `,
  },
  {
    name: 'Katlego Sebolai',
    title: 'Neuropsychology Master’s Student',
    image: placeholder,
    description: `
    In my research I focus on the relationship between neuropsychiatric disorders (particularly apathy
    and depression) and ability to engage in activities of daily living in people who neurological changes
    as a result of degenerative disorders or stroke.
    `,
  },
  {
    name: 'Kudzai Nyakusendwa',
    title: 'Research Student',
    image: placeholder,
    description: `
    My research interests lie primarily in the field of adult and old age neuropsychology where I focus In
    the clinical applicability of serious gaming and virtual reality in motor learning and rehabilitation,
    specifically as applied to improving functioning within activities of daily living.
    `,
  },
  {
    name: 'Matthew Kleinbeist',
    title: 'Research Student',
    image: placeholder,
    description: `
    My research focus is on the neurocognitive correlates of sub-conscious future-time estimation
    during sleep. I take a prospective memory approach to investigate these correlates.
    `,
  },
  {
    name: 'Tadious Bohwasi',
    title: 'Experiment Developer',
    image: tadious,
    description: `
    With a background in Software Development, I am interested in modelling or automating experiments and analysing the results for different sample sizes.
    `,
  },
];

export default function PeoplePage() {
  return (
    <Wrapper>
      <Breadcrump links={links} />
      <section
        className="wow fadeIn parallax people"
        data-stellar-background-ratio="0.8"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="opacity-medium bg-extra-dark-gray" />
        <div className="container">
          <div className="row">
            <div className="col-12 extra-small-screen page-title-large d-flex flex-column justify-content-center text-center">
              <h1 className="text-white-2 alt-font font-weight-600 letter-spacing-minus-1 margin-10px-bottom">
                &nbsp;
              </h1>
              <span className="text-white-2 opacity6 alt-font">&nbsp;</span>
            </div>
          </div>
        </div>
      </section>
      <section className="wow fadeIn people-core">
        <div className="container-fluid padding-seventeen-lr lg-padding-ten-lr sm-padding-15px-lr">
          <div className="row">
            {people.map(person => (
              <div className="col-12 col-lg-3 col-md-6 team-block text-left team-style-1 margin-40px-bottom md-margin-seven-bottom sm-margin-30px-bottom wow fadeInRight">
                <figure>
                  <div className="team-image sm-width-100">
                    <img src={person.image} alt={person.name} />
                    <div className="overlay-content text-center d-flex align-items-end justify-content-center">
                      <div className="icon-social-small padding-twelve-all width-100">
                        <span className="text-white-2 text-small d-inline-block m-0">
                          {person.description}
                        </span>
                        <div className="separator-line-horrizontal-full bg-deep-pink margin-eleven-tb" />
                      </div>
                    </div>
                    <div className="team-overlay bg-extra-dark-gray opacity8" />
                  </div>
                  <figcaption>
                    <div className="team-member-position margin-20px-top text-center">
                      <div className="text-small font-weight-500 text-extra-dark-gray text-uppercase">
                        {person.name}
                      </div>
                      <div className="text-extra-small text-uppercase text-medium-gray">
                        {person.title}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
