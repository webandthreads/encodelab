import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { Board } from './encoding/Board';
import { BasketIds } from './encoding/BasketIds';

let _cardId = 0;

export default class Encoder extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      baskets: [],
    };
  }

  componentDidMount() {
    this.props.baskets.forEach(basket => {
      this.addBasket(basket);
    });
    this.props.items.forEach(item => {
      if (item.type !== 'foil-item') {
        this.addCard(BasketIds.ALL, item);
      }
    });
  }

  addBasket = basket => {
    const id = Number(basket.id);
    const { color, bgColor, title, width } = basket;
    if (!title) return;

    const newBasket = {
      id,
      title,
      cardIds: [],
      color,
      bgColor,
      width,
    };
    this.setState(state => ({
      baskets: [...state.baskets, newBasket],
    }));
  };

  addCard = (columnId, item) => {
    const title = item.name.trim();
    const { image, type } = item;
    if (!title) return;

    const newCard = { id: ++_cardId, title, image, type };
    this.setState(state => ({
      cards: [...state.cards, newCard],
      baskets: state.baskets.map(column =>
        column.id === columnId
          ? { ...column, cardIds: [...column.cardIds, newCard.id] }
          : column,
      ),
    }));
  };

  moveCard = (cardId, destColumnId, index) => {
    this.setState(state => ({
      baskets: state.baskets.map(column => ({
        ...column,
        cardIds: _.flowRight(
          // 2) If this is the destination column, insert the cardId.
          ids =>
            column.id === destColumnId
              ? [...ids.slice(0, index), cardId, ...ids.slice(index)]
              : ids,
          // 1) Remove the cardId for all baskets
          ids => ids.filter(id => id !== cardId)
        )(column.cardIds),
      })),
    }));
  };

  render() {
    return (
      <Board
        cards={this.state.cards}
        columns={this.state.baskets}
        moveCard={this.moveCard}
      />
    );
  }
}

Encoder.propTypes = {
  items: PropTypes.array,
  baskets: PropTypes.array,
};
