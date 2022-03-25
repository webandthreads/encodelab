import React from 'react';
import { Basket } from './Basket';
import { Item } from './Item';

export function Game({ items, baskets, moveItem }) {
  const handleDrop = (index, item) => {
    moveItem(item.id, index + 1, 0);
  };

  return (
    <div className="Board">
      {baskets.map((basket, index) => (
        <Basket
          key={basket.id}
          title={basket.title}
          bgColor={basket.bgColor}
          color={basket.color}
          width={basket.width}
          accept={basket.accept}
          onDrop={item => handleDrop(index, item)}
        >
          {basket.cardIds
            .map(cardId => items.find(card => card.id === cardId))
            .map((card, index) => (
              <Item
                key={card.id}
                id={card.id}
                columnId={basket.id}
                columnIndex={index}
                name={card.name}
                image={card.image}
                type={card.type}
                moveItem={moveItem}
              />
            ))}
        </Basket>
      ))}
    </div>
  );
}
