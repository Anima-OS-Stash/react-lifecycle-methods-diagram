import PropTypes from 'prop-types';

export const supportedReactVersions = [
  'legacy',
  '16.3',
  '16.4',
];

export const isReactVersion = PropTypes.oneOf(supportedReactVersions);