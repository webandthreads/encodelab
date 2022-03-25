import React from 'react';
import videojs from 'video.js';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { moods } from './moods';

const NUMBER_OF_PAUSES = 5;

export default class VideoPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      timePauses: [],
      pauseAt: 0,
      readings: [],
      progress: 0,
      showRater: true,
    };

    this.videoNode = React.createRef();

    this.onMoodUpdate = this.onMoodUpdate.bind(this);
    this.onLoadedMetaData = this.onLoadedMetaData.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.play = this.play.bind(this);
  }

  onPlayerReady() {
    videojs.log('Your player is ready!');
  }

  componentDidMount() {
    this.player = videojs(
      this.videoNode.current,
      this.props.options,
      this.onPlayerReady,
    );

    this.player.on('timeupdate', this.onTimeUpdate);
    this.player.on('loadedmetadata', this.onLoadedMetaData);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  play() {
    this.player.play();
  }

  onMoodUpdate(value) {
    // Save mood update then play video
    this.state.readings.push({ time: this.player.currentTime(), value });

    // TODO: Remove this
    if (value === 5) {
      // Save the readings
      this.player.pause();
      this.props.onComplete(this.state.readings);
    }

    this.setState({ showRater: false });
    this.player.play();
  }

  onLoadedMetaData() {
    const duration = this.player.duration();
    const interval = duration / NUMBER_OF_PAUSES;
    for (let i = 1; i <= NUMBER_OF_PAUSES; i++) {
      this.state.timePauses.push(Math.ceil(i * interval));
    }
    this.setState({ pauseAt: this.state.timePauses.shift() });
  }

  onTimeUpdate() {
    this.setState({
      progress: Math.ceil(
        (this.player.currentTime() / this.player.duration()) * 100,
      ),
    });
    if (this.player.currentTime() >= this.state.pauseAt && !this.props.distractor) {
      this.player.pause();
      this.setState({ showRater: true });
      this.setState({ pauseAt: this.state.timePauses.shift() });
    }

    if (this.player.currentTime() === this.player.duration()) {
      this.props.onComplete(this.state.readings);
    }
  }

  render() {
    return (
      <div className="emotion-induction-video">
        <video
          ref={this.videoNode}
          className="video-js vjs-default-skin vjs-layout-large"
        />
        <p>&nbsp;</p>
        {this.state.showRater &&
          !this.props.distractor &&
          (this.state.progress === 0 ? (
            <p className="blog-details-text">
              You will be asked several times throughout the upcoming video to
              state how you are feeling. Click on the emoji that best represents
              how you are feeling. On the far left, you have very negative, the
              next is negative, in the middle you have neutral,to the right of
              that is, and on the far right, you have very positive. You can
              start over or exit participation at any time.
            </p>
          ) : (
            <h5 className="center">How are you feeling now?</h5>
          ))}
        {this.state.showRater && !this.props.distractor && (
          <div className="center">
            {moods.map(mood => (
              <Button
                onClick={() => this.onMoodUpdate(mood.value)}
                variant="link"
                className="no-border-bottom padding-Xpx"
                key={mood.value}
              >
                <svg
                  width="4em"
                  height="4em"
                  viewBox="0 0 16 16"
                  className={mood.emoji}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mood.paths.map(path => (
                    <path fillRule="evenodd" d={path.d} key={path.id} />
                  ))}
                </svg>
              </Button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  options: PropTypes.object,
  onComplete: PropTypes.func,
  distractor: PropTypes.bool,
};
