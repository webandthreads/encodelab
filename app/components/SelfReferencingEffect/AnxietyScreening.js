import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Quesionnaire from './Questionnaire';

export default class AnxietyScreening extends React.Component {
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
              title="Read each statement and then circle the appropriate number to the right of the statement to indicate how you feel right now at this moment. There are no right or wrong answers. Do not spend too much time on any one statement but click on the answer which seems to best describe your feelings best."
              questions={this.props.questions}
              onComplete={this.props.onComplete}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

AnxietyScreening.propTypes = {
  onComplete: PropTypes.func,
  questions: PropTypes.array,
};
