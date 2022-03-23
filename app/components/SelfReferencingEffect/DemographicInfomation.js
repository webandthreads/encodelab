import React from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class DemographicInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      validated: false,
      age: 22,
    };

    this.form = React.createRef();
    this.age = React.createRef();
    this.nationality = React.createRef();
    this.gender = React.createRef();
    this.prescribedGlasses = React.createRef();
    this.wearGlasses = React.createRef();
    this.device = React.createRef();
    this.makeAndModel = React.createRef();
    this.studentNumber = React.createRef();
    this.course = React.createRef();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validNumeric = this.validNumeric.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const validated = this.form.current.checkValidity();
    if (validated) {
      this.props.onContinue({
        age: this.state.age,
        nationality: this.nationality.current.value,
        gender: this.gender.current.value,
        prescribedGlasses: this.prescribedGlasses.current.checked,
        wearGlasses: this.wearGlasses.current.checked,
        device: this.device.current.value,
        makeAndModel: this.makeAndModel.current.value,
        studentNumber: this.studentNumber.current.value,
        course: this.course.current.value,
      });
      this.close();
    }

    this.setState({ validated: true });
  }

  validNumeric(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ age: e.target.value });
    }
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
            <div className="container">
              <div className="row">
                <div className="col-12 blog-details-text last-paragraph-no-margin">
                  <h6 className="center">Demographic Information</h6>
                  <Alert variant="warning" className="col-12">
                    Instructions: Please fill in the relevant information in the
                    form below.
                  </Alert>
                  <Form
                    noValidate
                    validated={this.state.validated}
                    ref={this.form}
                    onSubmit={this.handleSubmit}
                  >
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control value={this.props.fullname} readOnly />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        required
                        ref={this.age}
                        placeholder="How old are you?"
                        onChange={this.validNumeric}
                        value={this.state.age}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Nationality</Form.Label>
                      <Form.Control
                        required
                        ref={this.nationality}
                        placeholder="What Country are you from?"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        required
                        ref={this.gender}
                        placeholder="What Gender are you?"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Eye Sight</Form.Label>
                      <Form.Check
                        custom
                        type="switch"
                        id="prescribedGlasses"
                        ref={this.prescribedGlasses}
                        label="Have you been prescibed glasses or contacts?"
                      />
                      <Form.Check
                        custom
                        type="switch"
                        id="wearGlasses"
                        ref={this.wearGlasses}
                        label="Do you wear glasses or contacts?"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Device</Form.Label>
                      <Form.Control as="select" custom ref={this.device}>
                        <option>Laptop</option>
                        <option>Tablet</option>
                        <option>Desktop</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Device Make and Model</Form.Label>
                      <Form.Control
                        required
                        ref={this.makeAndModel}
                        placeholder="What id your device Make and Model?"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Student Number</Form.Label>
                      <Form.Control
                        required
                        ref={this.studentNumber}
                        placeholder="What id your Student Number?"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Course for SRPP Points</Form.Label>
                      <Form.Control
                        required
                        ref={this.course}
                        placeholder="Which Course do you need the SRPP points for?"
                      />
                    </Form.Group>
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

DemographicInformation.propTypes = {
  onContinue: PropTypes.func,
  fullname: PropTypes.string,
};
