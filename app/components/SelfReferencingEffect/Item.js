import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';

import { ItemTypes } from './ItemTypes';

const style = {
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

export const Item = ({ name, image, type, isDropped }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, image, type },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  let border;
  let backgroundColor;
  switch (type) {
    case ItemTypes.FRIENDS_ITEM:
      border = '2px solid #ffc108';
      backgroundColor = isDropped ? '#ffc108' : 'white';
      break;
    case ItemTypes.MY_ITEM:
      border = '2px solid #18a2b8';
      backgroundColor = isDropped ? '#18a2b8' : 'white';
      break;
    case ItemTypes.STRANGERS_ITEM:
      border = '2px solid #343a40';
      backgroundColor = isDropped ? '#343a40' : 'white';
      break;
    default:
      border = '2px solid blue';
      backgroundColor = 'white';
  }

  return (
    <Figure ref={drag} style={{ ...style, opacity, border, backgroundColor }}>
      <Figure.Image width={50} height={50} alt={name} src={image} />
      <Figure.Caption>{isDropped ? <s>{name}</s> : name}</Figure.Caption>
    </Figure>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  isDropped: PropTypes.bool,
};
