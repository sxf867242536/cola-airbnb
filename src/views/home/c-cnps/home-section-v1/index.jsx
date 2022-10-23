import PropTypes from 'prop-types';
import React, { memo } from 'react';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';
import HomeSectionV1Wrapper from './style';

const HomeSectionV1 = memo((props) => {
  const { infoData, itemWidth } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms list={infoData.list} itemWidth={itemWidth} />
      <SectionFooter />
    </HomeSectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape()),
  }),
  itemWidth: PropTypes.string,
};
HomeSectionV1.defaultProps = {
  infoData: {},
  itemWidth: '25%',
};

export default HomeSectionV1;
