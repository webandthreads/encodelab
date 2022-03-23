import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import VideoPlayer from './VideoPlayer';

const distractor = false;

export default class EmotionInductor extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.videoPlayer = React.createRef();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Modal
        show={this.state.showModal}
        onHide={this.close}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="modal-75w"
      >
        <Modal.Body>
          <VideoPlayer
            ref={this.videoPlayer}
            options={this.props.videoOptions}
            onComplete={this.props.onComplete}
            distractor={distractor}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

EmotionInductor.propTypes = {
  videoOptions: PropTypes.object,
  onComplete: PropTypes.func,
};
