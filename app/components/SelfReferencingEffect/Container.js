import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';

const style = {
  height: '12rem',
  width: '24rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

export const Container = ({
  title,
  accept,
  lastDroppedItem,
  onDrop,
  bgColor,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let backgroundColor = bgColor;
  let color = 'white';
  let border;
  if (isActive) {
    backgroundColor = '#76ba1b';
    color = 'red';
    border = '2px dashed red';
  } else if (canDrop) {
    backgroundColor = '#acdf87';
    color = 'red';
    border = '2px dashed red';
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor, color, border }}>
      {isActive ? 'Release to drop' : `This boot accepts ${title} Items`}
      {lastDroppedItem && <p>Last dropped: {lastDroppedItem.name}</p>}
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  accept: PropTypes.array,
  lastDroppedItem: PropTypes.object,
  onDrop: PropTypes.func,
  bgColor: PropTypes.string,
};
