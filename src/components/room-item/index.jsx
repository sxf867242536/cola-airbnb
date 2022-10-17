import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Rating from '@mui/material/Rating';
import RoomItemWrapper from './style';

const RoomItem = memo((props) => {
  const { itemData } = props;
  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      contentColor={itemData?.bottom_info?.content_color}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(' • ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            readOnly
            sx={{ fontSize: '12px', color: '#00848a' }}
            precision={0.5}
          />
          <span className="count">{itemData.reviews_count}</span>
          <span className="extra">
            {itemData?.bottom_info ? '·' : ''}
            {itemData?.bottom_info?.content}
          </span>
        </div>
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
RoomItem.defaultProps = {
  itemData: {},
};
export default RoomItem;
