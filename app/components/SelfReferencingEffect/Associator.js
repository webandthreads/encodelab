import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Modal, Button } from 'react-bootstrap';
import Timer from 'tiny-timer';

import { Basket } from './encode/Basket';

const COUNT_FROM = 30;

export default class Associator extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      basket: null,
      countdown: COUNT_FROM,
      displayInstructions: false,
    };

    this.timer = new Timer();
    this.form = React.createRef();

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.delay = this.delay.bind(this);
    this.start = this.start.bind(this);

    this.timer.on('tick', ms => {
      if (this.state.countdown > 0 && ms) {
        this.setState(prevState => ({ countdown: prevState.countdown - 1 }));
      }
    });
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  componentWillUnmount() {
    this.timer.stop();
    this.timer = null;
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
    this.start();
  }

  async start() {
    for (const basket in this.props.baskets) {
      this.setState({ basket: this.props.baskets[Number(basket)], countdown: COUNT_FROM });
      this.timer.stop();
      this.timer.start(COUNT_FROM * 1000);
      await this.delay(COUNT_FROM * 1000);
    }

    this.setState({ displayInstructions: true });
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
          {this.state.basket && !this.state.displayInstructions && (
            <Jumbotron>
              <h6>Hello, {this.props.fullname}</h6>
              <h6>
                This is <strong>{this.state.basket.label}</strong>. Take {this.state.countdown} seconds to associate yourself with this shopping basket.
              </h6>
              <Basket
                key={this.state.basket.id}
                title={this.state.basket.title}
                bgColor={this.state.basket.bgColor}
                color={this.state.basket.color}
                width={Number(this.state.basket.width)}
                accept=""
                onDrop={item => console.log({ item })}
              />
              <br />
              <br />
              <h4 className="center">{this.state.countdown} Seconds</h4>
            </Jumbotron>
          )}
          {this.state.displayInstructions && (
            <Jumbotron>
              <h6>Hello, {this.props.fullname}</h6>
              <h6>
                Imagine that you, your best friend, and a stranger have gone grocery shopping together. As you go through the shop, you need to organise each person’s groceries into your separate baskets. You each have bought about {this.props.numItems} items.
              </h6>
              <h6>
                This computer game is going to display the name of various grocery items to the left. If an item belongs to you, you must drag it to your shopping basket. If an item belongs to your friend, you must drag it to their basket. If an item belongs to the stranger, you must drag it into the stranger's basket. There is no time limit.
              </h6>
              <Button onClick={this.props.onComplete}>Continue</Button>
            </Jumbotron>
          )}
        </Modal.Body>
      </Modal>
    );
  }
}

Associator.propTypes = {
  onComplete: PropTypes.func,
  fullname: PropTypes.string,
  baskets: PropTypes.array,
  numItems: PropTypes.number,
};
