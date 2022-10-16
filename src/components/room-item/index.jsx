import PropTypes from 'prop-types';
import React, { memo } from 'react';
import RoomItemWrapper from './style';

const RoomItem = memo((props) => {
  const { itemData } = props;
  return (
    <RoomItemWrapper>
      {itemData && itemData.name}
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
  }),
};
RoomItem.defaultProps = {
  itemData: {},
};
export default RoomItem;
