import PropTypes from 'prop-types';
import React, { memo } from 'react';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import HomeSectionV1Wrapper from './style';

const HomeSectionV1 = memo((props) => {
  const { infoData, itemWidth } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms list={infoData.list} itemWidth={itemWidth} />
    </HomeSectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.shape({
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
    ),
  }),
  itemWidth: PropTypes.string,
};
HomeSectionV1.defaultProps = {
  infoData: {},
  itemWidth: '25%',
};

export default HomeSectionV1;
