import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';
import * as Timer from 'minimal-timer';

import { ItemTypes } from './ItemTypes';

export default class RecallStage extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentItem: null,
      currentIndex: null,
      currentQuestion: null,
      progress: 0,
      answers: [],
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.processNextItem = this.processNextItem.bind(this);
    this.evaluateQuestionOne = this.evaluateQuestionOne.bind(this);
    this.evaluateQuestionTwo = this.evaluateQuestionTwo.bind(this);

    this.time = Timer();
  }

  componentDidMount() {
    this.processNextItem();
  }

  processNextItem() {
    let { currentIndex } = this.state;
    currentIndex = currentIndex === null ? 0 : currentIndex + 1;

    if (currentIndex > this.props.items.length - 1) {
      this.props.onComplete(this.state.answers);
    }
    this.setState({
      currentIndex,
      currentItem: this.props.items[currentIndex],
      currentQuestion: 1,
      progress: Math.round((currentIndex / this.props.items.length) * 100),
    });
    this.time.start();
  }

  evaluateQuestionOne(value) {
    this.time.stop();
    const { currentItem } = this.state;
    this.state.answers[currentItem.id] = {
      question1: {
        answer: value,
        time: this.time.elapsedTime(),
      },
    };
    if (value) {
      this.setState({ currentQuestion: 2 });
      this.time.start();
    } else {
      this.processNextItem();
    }
  }

  evaluateQuestionTwo(value) {
    this.time.stop();
    const { currentItem } = this.state;
    this.state.answers[currentItem.id].question2 = {
      answer: value,
      time: this.time.elapsedTime(),
    };

    this.processNextItem();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    let itemName = 'Initializing...';
    let itemImage = '';
    let question = 'Was this item in the task?';
    if (this.state.currentItem) {
      itemName = this.state.currentItem.name;
      itemImage = this.state.currentItem.image;
    }
    if (this.state.currentQuestion === 2) {
      question = 'Who put the item in the boot?';
    }
    return (
      <Modal
        show={this.state.showModal}
        onHide={this.close}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <h5 className="center">{question}</h5>
          <div className="center">
            <Figure>
              <Figure.Image
                width={150}
                height={150}
                alt={itemName}
                src={itemImage}
              />
              <Figure.Caption>{itemName}</Figure.Caption>
            </Figure>
          </div>
          <p>&nbsp;</p>
          {this.state.currentQuestion === 1 && (
            <div className="center">
              <Button
                variant="success"
                onClick={() => this.evaluateQuestionOne(true)}
              >
                Yes
              </Button>{' '}
              <Button
                variant="dark"
                onClick={() => this.evaluateQuestionOne(false)}
              >
                No
              </Button>
            </div>
          )}
          {this.state.currentQuestion === 2 && (
            <div className="center">
              <Button
                variant="warning"
                onClick={() => this.evaluateQuestionTwo(ItemTypes.FRIENDS_ITEM)}
              >
                My Friend
              </Button>{' '}
              <Button
                variant="info"
                onClick={() => this.evaluateQuestionTwo(ItemTypes.MY_ITEM)}
              >
                Myself
              </Button>{' '}
              <Button
                variant="dark"
                onClick={() =>
                  this.evaluateQuestionTwo(ItemTypes.STRANGERS_ITEM)
                }
              >
                A Stranger
              </Button>
            </div>
          )}
          <p>&nbsp;</p>
          <ProgressBar
            striped
            variant="success"
            now={this.state.progress}
            label={`Stage Progress ${this.state.progress}%`}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

RecallStage.propTypes = {
  items: PropTypes.array,
  onComplete: PropTypes.func,
};
