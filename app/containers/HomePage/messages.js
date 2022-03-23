/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage:
      'Interactive EmotioN Cognition and Decision making laboratory.',
  },
  p1: {
    id: `${scope}.p1`,
    defaultMessage: `ENCODE (Emotion, Cognition, and Decision) is a research lab made up of research scientists and graduate students based in the Psychology Department at the
      University of Cape Town. The research interests in our lab cover areas in experimental cognitive
      psychology, neuropsychology, affective neuroscience and computer science.`,
  },
  p2: {
    id: `${scope}.p2`,
    defaultMessage: `The following are some of the current research topics in our lab:`,
  },
  p3: {
    id: `${scope}.p3`,
    defaultMessage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
