import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export default class ResultsModal extends React.Component {
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
    this.props.onClose();
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    console.log('>>>>>>>>', this.props.answers, this.props.items);
    return (
      <Modal
        show={this.state.showModal}
        onHide={this.close}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <h5 className="center">Thank you for participating.</h5>
          <p>
            <span className="medium-large">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the and typesetting
              industry.
            </span>
          </p>
          <p>
            <span className="medium-large">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the industry. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the and typesetting
              industry.
            </span>
          </p>
          <p className="center">
            <Button variant="success" onClick={this.close}>
              Close
            </Button>
          </p>
        </Modal.Body>
      </Modal>
    );
  }
}

ResultsModal.propTypes = {
  onClose: PropTypes.func,
  answers: PropTypes.array,
  items: PropTypes.array,
};
