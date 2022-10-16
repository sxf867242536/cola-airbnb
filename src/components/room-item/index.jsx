import PropTypes from 'prop-types';
import React, { memo } from 'react';
import RoomItemWrapper from './style';

const RoomItem = memo((props) => {
  const { itemData } = props;

  return (
    <RoomItemWrapper>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(' • ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
    picture_url: PropTypes.string,
    verify_info: PropTypes.shape({
      messages: PropTypes.arrayOf(PropTypes.string),
    }),
    price_format: PropTypes.string,
  }),
};
RoomItem.defaultProps = {
  itemData: {},
};
export default RoomItem;
