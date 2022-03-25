import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, Form } from 'react-bootstrap';

export default class Questionnaire extends Component {
  constructor() {
    super();

    this.state = {
      question: null,
      index: 0,
      answer: null,
      answers: [],
      selected: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { index } = this.state;
    this.setState({
      question: this.props.questions[index],
    });
  }

  handleClick() {
    if (this.state.answer) {
      this.state.answers.push({
        question: this.state.question,
        answer: this.state.answer,
      });

      const index = this.state.index + 1;
      if (this.props.questions.length > index) {
        this.state.selected.checked = false;
        this.setState({
          index,
          answer: null,
          question: this.props.questions[index],
        });
      } else {
        this.props.onComplete(this.state.answers);
      }
    }
  }

  handleChange(e) {
    e.persist();
    this.setState({ answer: e.target.value, selected: e.target });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 blog-details-text last-paragraph-no-margin">
            {this.state.question && (
              <Form>
                <Alert variant="info" className="col-12">
                  <p className="center">{this.props.title}</p>
                </Alert>
                <Form.Group ref={this.form}>
                  <Form.Label>{this.state.question.title}</Form.Label>
                  {this.state.question.options.map(option => (
                    <Form.Check
                      custom
                      type="radio"
                      name="thequestion"
                      id={`option${option.id}`}
                      value={option.id}
                      onChange={this.handleChange}
                      label={option.title}
                      key={option.id}
                    />
                  ))}
                </Form.Group>
                <Button variant="primary" onClick={this.handleClick}>
                  Save Answer
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Questionnaire.propTypes = {
  onComplete: PropTypes.func,
  questions: PropTypes.array,
  title: PropTypes.string,
};
