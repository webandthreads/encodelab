import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Game } from './Game';
import { BasketIds } from './BasketIds';

export default class Encode extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      baskets: [],
    };
  }

  componentDidMount() {
    this.props.baskets.forEach(basket => {
      this.addBasket(basket);
    });
    this.props.items.forEach(item => {
      if (item.type !== 'foil-item') {
        this.addItem(BasketIds.ALL, item);
      }
    });
  }

  doneEncoding() {
    return this.state.baskets[0].cardIds.length;
  }

  addBasket = basket => {
    const { id, color, bgColor, title, width, accept } = basket;
    if (!title) return;

    const newBasket = {
      id,
      title,
      cardIds: [],
      color,
      bgColor,
      width,
      accept,
    };
    this.setState(state => ({
      baskets: [...state.baskets, newBasket],
    }));
  };

  addItem = (basketId, item) => {
    const { id, name, image, type } = item;

    const newItem = { id, name, image, type };
    this.setState(state => ({
      items: [...state.items, newItem],
     baskets: state.baskets.map(column =>
        column.id === basketId
          ? { ...column, cardIds: [...column.cardIds, newItem.id] }
          : column,
      ),
    }));
  };

  moveItem = (itemId, destColumnId, index) => {
    this.setState(state => ({
      baskets: state.baskets.map(column => ({
        ...column,
        cardIds: _.flowRight(
          // 2) If this is the destination column, insert the itemId.
          ids =>
            column.id === destColumnId
              ? [...ids.slice(0, index), itemId, ...ids.slice(index)]
              : ids,
          // 1) Remove the itemId for all baskets
          ids => ids.filter(id => id !== itemId)
        )(column.cardIds),
      })),
    }));
    this.props.itemsLeft(this.state.baskets[0].cardIds.length);
  };

  render() {
    return (
      <Game
        items={this.state.items}
        baskets={this.state.baskets}
        moveItem={this.moveItem}
      />
    );
  }
}

Encode.propTypes = {
  items: PropTypes.array,
  baskets: PropTypes.array,
  itemsLeft: PropTypes.func,
};
