import React from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from './VideoPlayer';

export default class EmotionEncoding extends React.Component {
  constructor() {
    super();

    this.videoPlayer = React.createRef();

    this.onVideoComplete = this.onVideoComplete.bind(this);
    this.onVideoExit = this.onVideoExit.bind(this);
    this.onVideoRestart = this.onVideoRestart.bind(this);
    this.start = this.start.bind(this);
  }

  onVideoComplete() {
    this.props.history.push(
      '/participate/self-referencing-effect/encode-and-recall',
    );
  }

  onVideoExit() {
    this.props.history.push('/participate');
  }

  onVideoRestart() {
    this.props.history.push(
      '/participate/self-referencing-effect/emotion-induction',
    );
  }

  start() {
    this.videoPlayer.current.start();
  }

  render() {
    return (
      <VideoPlayer
        ref={this.videoPlayer}
        options={this.props.videoOptions}
        onComplete={this.onVideoComplete}
        onExit={this.onVideoExit}
        onRestart={this.onVideoRestart}
      />
    );
  }
}

EmotionEncoding.propTypes = {
  videoOptions: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
