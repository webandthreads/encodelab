import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { Figure } from 'react-bootstrap';
import cn from 'classnames';
import _ from 'lodash';

import { ItemTypes } from '../ItemTypes';
import { BasketIds } from './BasketIds';

const style = {
  padding: '5px 5px',
};

export function Card(props) {
  let backgroundColor = 'white';
  switch (props.type) {
    case ItemTypes.FRIENDS_ITEM:
      backgroundColor = '#ffc108';
      break;
    case ItemTypes.MY_ITEM:
      backgroundColor = '#18a2b8';
      break;
    case ItemTypes.STRANGERS_ITEM:
      backgroundColor = '#343a40';
      break;
    default:
      backgroundColor = 'white';
  }
  return _.flowRight(props.connectDragSource, props.connectDropTarget)(
    <div
      className={cn('Card', {
        'Card--dragging': props.isDragging,
        'Card--spacer': props.isSpacer,
      })}
    >
      <Figure style={{ ...style, backgroundColor }}>
        <Figure.Image width={30} height={30} alt={props.title} src={props.image} />
      </Figure>
      <div className="Card__title">{props.title}</div>
      <div className="Card__title">{props.type}</div>
    </div>
  );
}

export const DraggableCard = _.flowRight([
  DropTarget(
    'Card',
    {
      hover(props, monitor) {
        const { columnId, columnIndex } = props;
        const draggingItem = monitor.getItem();
        if (draggingItem.id !== props.id) {
          props.moveCard(draggingItem.id, columnId, columnIndex);
        }
      },
    },
    connect => ({
      connectDropTarget: connect.dropTarget(),
    })
  ),
  DragSource(
    'Card',
    {
      beginDrag(props) {
        return { id: props.id };
      },

      isDragging(props, monitor) {
        return props.id === monitor.getItem().id;
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    })
  ),
])(Card);
