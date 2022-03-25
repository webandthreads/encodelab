import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Quesionnaire from './Questionnaire';

export default class DepressionScreening extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

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
            <Quesionnaire
              title="The following questions will ask about your feelings and activities. Please give the best response that describes you."
              questions={this.props.questions}
              onComplete={this.props.onComplete}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

DepressionScreening.propTypes = {
  onComplete: PropTypes.func,
  questions: PropTypes.array,
};
