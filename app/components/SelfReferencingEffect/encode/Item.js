import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';

const style = {
  padding: '8px 8px',
};

export const Item = ({ id, name, image, type }) => {
  const [{ opacity }, drag] = useDrag({
    item: { id, name, image, type },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <div ref={drag} style={{
      opacity,
      background: '#011936',
      padding: 15,
      borderRadius: 5,
      cursor: 'move',
      width: 90,
      float: 'left',
      margin: 10,
      textAlign: 'center'
    }}>
      <Figure style={{ ...style }}>
        <Figure.Image width={30} height={30} alt={name} src={image} />
      </Figure>
      <div className="Card__title">{name}</div>
      <div className="Card__title">{type}</div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  isDropped: PropTypes.bool,
};
