import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import { moods } from './moods';

export default class VideoModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.exit = this.exit.bind(this);
    this.onMoodUpdate = this.onMoodUpdate.bind(this);
    this.restart = this.restart.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  exit() {
    this.close();
    this.props.onExit();
  }

  restart() {
    this.close();
    this.props.onRestart();
  }

  onMoodUpdate(value) {
    this.props.onMoodUpdate(value);
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
        >
          <Modal.Body>
            {this.props.progress === 0 ? (
              <p>
                <span className="text-large">
                  You will be asked several times throughout the upcoming video
                  to state how you are feeling. Click on the emoji that best
                  represents how you are feeling. On the far left, you have very
                  negative, the next is negative, in the middle you have
                  neutral, to the right of that is, and on the far right, you
                  have very positive. You can start over or exit participation
                  at any time.
                </span>
              </p>
            ) : (
              <h5 className="center">How are you feeling now?</h5>
            )}
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
            <p>&nbsp;</p>
            <ProgressBar
              striped
              variant="success"
              now={this.props.progress}
              label={`Video Progress ${this.props.progress}%`}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

VideoModal.propTypes = {
  onMoodUpdate: PropTypes.func,
  onExit: PropTypes.func,
  onRestart: PropTypes.func,
  progress: PropTypes.number,
};
