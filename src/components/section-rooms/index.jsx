import PropTypes from 'prop-types';
import React, { memo } from 'react';
import RoomItem from '../room-item';
import SectionRoomsWrapper from './style';

const SectionRooms = memo((props) => {
  const { list, itemWidth } = props;
  return (
    <SectionRoomsWrapper>
      <ul className="room-list">
        {list?.slice(0, 8).map((item) => (
          <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
        ))}
      </ul>
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
  itemWidth: PropTypes.string,
};
SectionRooms.defaultProps = {
  list: [],
  itemWidth: '25%',
};

export default SectionRooms;
