import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import VideoPlayer from './VideoPlayer';

const distractor = true;

export default class Distractor extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.videoPlayer = React.createRef();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    this.videoPlayer.current.play();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={this.close}
          backdrop="static"
          keyboard={false}
          centered
          dialogClassName="modal-75w"
        >
          <Modal.Body>
            <p className="blog-details-text">
              Please carefully watch the following video. Are you ready?
            </p>
            <Button onClick={this.playVideo}>Play Video</Button>
            <br />
            <br />
            <VideoPlayer
              ref={this.videoPlayer}
              options={this.props.options}
              onComplete={this.props.onComplete}
              distractor={distractor}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

Distractor.propTypes = {
  onComplete: PropTypes.func,
  options: PropTypes.object,
};
