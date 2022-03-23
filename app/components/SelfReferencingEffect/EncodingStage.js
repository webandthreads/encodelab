import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import { Container } from './Container';
import { Item } from './Item';
import { ItemTypes } from './ItemTypes';

const EncodingStage = ({ items }) => {
  const [containers, setContainers] = useState([
    {
      id: 'friends',
      title: "Friend's",
      accepts: [ItemTypes.FRIENDS_ITEM],
      lastDroppedItem: null,
      bgColor: '#ffc108',
    },
    {
      id: 'mine',
      title: 'My',
      accepts: [ItemTypes.MY_ITEM],
      lastDroppedItem: null,
      bgColor: '#18a2b8',
    },
    {
      id: 'strangers',
      title: "Stranger's",
      accepts: [ItemTypes.STRANGERS_ITEM],
      lastDroppedItem: null,
      bgColor: '#343a40',
    },
  ]);

  const [displayItems] = useState(items);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      );
      setContainers(
        update(containers, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      );
    },
    [droppedBoxNames, containers],
  );

  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {containers.map(
          ({ id, title, accepts, lastDroppedItem, bgColor }, index) => (
            <Container
              title={title}
              accept={accepts}
              lastDroppedItem={lastDroppedItem}
              droppedItems={droppedBoxNames}
              onDrop={item => handleDrop(index, item)}
              key={id}
              bgColor={bgColor}
            />
          ),
        )}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {displayItems.map(({ id, name, image, type }) => (
          <Item
            name={name}
            image={image}
            type={type}
            isDropped={isDropped(name)}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

EncodingStage.propTypes = {
  items: PropTypes.array,
};

export default EncodingStage;
