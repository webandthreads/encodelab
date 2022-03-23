import React from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class AnxietyScreening extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      answers: [],
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleClick() {
    this.props.onComplete(this.state.answers);
    this.close();
  }

  handleChange(e) {
    e.persist();
    this.state.answers[e.target.value] = e.target.checked;
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
                  {this.props.questions && (
                    <Form>
                      <Alert variant="info" className="col-12">
                        A number of statements which people have used to
                        describe themselves are given below. Read each statement
                        and then circle the appropriate number to the right of
                        the statement to indicate how you feel right now at this
                        moment. There are no right or wrong answers. Do not
                        spend too much time on any one statement but click on
                        the answer which seems to best describe your feelings
                        best.
                      </Alert>
                      <Form.Group ref={this.form}>
                        {this.props.questions.map(question => (
                          <Form.Check
                            custom
                            type="checkbox"
                            id={`question-${question.id}`}
                            label={question.title}
                            key={question.id}
                            onChange={this.handleChange}
                            value={question.id}
                          />
                        ))}
                      </Form.Group>
                      <Button variant="primary" onClick={this.handleClick}>
                        Save Answers
                      </Button>
                    </Form>
                  )}
                </div>
              </div>
            </div>
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
