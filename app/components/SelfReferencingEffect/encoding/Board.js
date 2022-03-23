import React from 'react';
import { Column } from './Column';
import { DraggableCard } from './Card';
import { BasketIds } from './BasketIds';

export function Board({ cards, columns, moveCard }) {
  const destinationColumn = (card) => {
    console.log('>>>>>>>>>>>>>>>>', { card });
    return card.id;
  };

  return (
    <div className="Board">
      {columns.map(column => (
        <Column
          key={column.id}
          title={column.title}
          bgColor={column.bgColor}
          color={column.color}
          width={column.width}
        >
          {column.cardIds
            .map(cardId => cards.find(card => card.id === cardId))
            .map((card, index) => (
              <DraggableCard
                key={card.id}
                id={card.id}
                columnId={column.id}
                columnIndex={index}
                title={card.title}
                image={card.image}
                type={card.type}
                moveCard={moveCard}
                destinationColumn={destinationColumn(card)}
              />
            ))}
          {column.cardIds.length === 0 && (
            <DraggableCard
              isSpacer
              moveCard={cardId => moveCard(cardId, column.id, 0)}
            />
          )}
        </Column>
      ))}
    </div>
  );
}
