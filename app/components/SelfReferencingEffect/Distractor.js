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
            <p className="blog-details-text" style={{ padding: 20, fontSize: 16 }}>
              Thank you for doing the shopping. Now, please carefully watch the following video. Click button to Play.
              <br />
              <br />
              <Button onClick={this.playVideo}>Play Video</Button>
            </p>
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
