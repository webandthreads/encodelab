/*
 * ParticipationPage
 *
 * Participation Page
 */
import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Breadcrump from '../../components/Breadcrump';

import SelfReferencingEffect from '../../components/SelfReferencingEffect';
import { ItemTypes } from '../../components/SelfReferencingEffect/encode/ItemTypes';

import '../../components/SelfReferencingEffect/encode/styles.css';

import projects from '../ProjectsPage/projects.json';
import items from './encoding-items.json';
import baskets from './encoding-baskets.json';
import associationBaskets from './association-baskets.json';
import anxietyScreeningQuestions from './anxiety-questions.json';
import depressionScreeningQuestions from './depression-questions.json';

import negative from './negative.mp4';
import neutral from './neutral.mp4';
import distraction from './distraction.mp4';

const axios = require('axios');

function ParticipatePage({ match }) {
  const {
    params: { projectId },
  } = match;

  const onComplete = async data => {
    try {
      const response = await axios.post(
        `https://api.encodelab.org/api/v1/participation/self-referencing-effect`,
        // `http://localhost:1338/api/v1/participation/self-referencing-effect`,
        data,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
      title: 'Participate',
      url: `/participate`,
    },
    {
      title: project.title,
      url: project.participateUrl,
    },
  ];

  items.sort(() => Math.random() - 0.5);
  const itemsList = items.map((item, index) => {
    let type;
    const { name, image } = item;
    const mod = index % 4;
    switch (mod) {
      case 0:
        type = ItemTypes.FRIENDS_ITEM;
        break;
      case 1:
        type = ItemTypes.MY_ITEM;
        break;
      case 2:
        type = ItemTypes.STRANGERS_ITEM;
        break;
      case 3:
        type = ItemTypes.FOIL_ITEM;
        break;
      default:
        type = undefined;
    }

    return {
      id: item.id,
      name,
      image,
      type,
    };
  });
  itemsList.sort(() => Math.random() - 0.5);
  let video;
  let emotionType;
  if (Math.floor(Math.random() * 2) === 0) {
    video = negative;
    emotionType = 'negative';
  } else {
    video = neutral;
    emotionType = 'neutral';
  }
  const videoOptions = {
    autoplay: false,
    controls: false,
    fluid: true,
    sources: [
      {
        src: video,
        type: 'video/mp4',
      },
    ],
  };

  const distractorVideoOptions = {
    autoplay: false,
    muted: true,
    controls: false,
    fluid: true,
    sources: [
      {
        src: distraction,
        type: 'video/mp4',
      },
    ],
  };

  return (
    <Wrapper>
      <Breadcrump links={links} />
      <section className="padding-35px-tb">
        <div className="container">
          <div className="row">
            <SelfReferencingEffect
              items={itemsList}
              baskets={baskets}
              associationBaskets={associationBaskets}
              anxietyScreeningQuestions={anxietyScreeningQuestions}
              depressionScreeningQuestions={depressionScreeningQuestions}
              videoOptions={videoOptions}
              distractorVideoOptions={distractorVideoOptions}
              onComplete={onComplete}
              emotionType={emotionType}
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

ParticipatePage.propTypes = {
  match: PropTypes.object,
};

export default ParticipatePage;
