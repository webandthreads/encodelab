import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Modal } from 'react-bootstrap';

import Timer from 'tiny-timer';

import { Column } from './encoding/Column';

const COUNT_FROM = 30;

export default class Associator extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      basket: null,
      countdown: COUNT_FROM,
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
    this.props.onComplete();
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
            {this.state.basket && (
              <Jumbotron>
                <h6>Hello, {this.props.fullname}</h6>
                <h6>
                  This is your basket/your best friend’s basket/a stranger’s
                  basket. Take 30 seconds to associate yourself/your
                  friend/stranger with this shopping basket
                </h6>
                <Column
                  key={this.state.basket.id}
                  title={this.state.basket.title}
                  bgColor={this.state.basket.bgColor}
                  color={this.state.basket.color}
                  width={Number(this.state.basket.width)}
                />
                <br />
                <br />
                <h4 className="center">{this.state.countdown} Seconds</h4>
              </Jumbotron>
            )}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

Associator.propTypes = {
  onComplete: PropTypes.func,
  fullname: PropTypes.string,
  baskets: PropTypes.array,
};
