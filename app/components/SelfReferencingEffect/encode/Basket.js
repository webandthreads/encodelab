import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

export const Basket = ({
  title,
  accept,
  onDrop,
  bgColor,
  children,
  width
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: [accept],
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let background = bgColor;
  let color = 'white';
  if (isActive) {
    background = '#76ba1b';
    color = 'red';
  } else if (canDrop) {
    background = '#acdf87';
    color = 'red';
  }
  return (
    <div ref={drop} className="Column" style={{ background, width, minHeight: 120 }}>
      <div className="Column__title" style={{ color }}>
        {title}
      </div>
      {children}
    </div>
  );
};

Basket.propTypes = {
  title: PropTypes.string,
  accept: PropTypes.string,
  lastDroppedItem: PropTypes.object,
  onDrop: PropTypes.func,
  bgColor: PropTypes.string,
};
