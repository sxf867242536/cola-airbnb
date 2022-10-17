import PropTypes from 'prop-types';
import React, { memo } from 'react';
import RoomItem from '../room-item';
import SectionRoomsWrapper from './style';

const SectionRooms = memo((props) => {
  const { list } = props;
  return (
    <SectionRoomsWrapper>
      <ul className="room-list">
        {list?.slice(0, 8).map((item) => (
          <RoomItem itemData={item} key={item.id} />
        ))}
      </ul>
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  list: PropTypes.arrayOf({
    name: PropTypes.string,
    picture_url: PropTypes.string,
    verify_info: PropTypes.shape({
      messages: PropTypes.arrayOf(PropTypes.string),
      text_color: PropTypes.string,
    }),
    price_format: PropTypes.string,
    star_rating: PropTypes.number,
    reviews_count: PropTypes.number,
    bottom_info: PropTypes.shape({
      content: PropTypes.string,
      content_color: PropTypes.string,
    }),
  }),
};
SectionRooms.defaultProps = {
  list: [],
};

export default SectionRooms;
