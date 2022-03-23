/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'ENCODE Lab',
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  blog: {
    id: `${scope}.blog`,
    defaultMessage: 'Blog',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  memoryTest: {
    id: `${scope}.memoryTest`,
    defaultMessage: 'Memory Test',
  },
  call_us: {
    id: `${scope}.call_us`,
    defaultMessage: 'Call us',
  },
});
