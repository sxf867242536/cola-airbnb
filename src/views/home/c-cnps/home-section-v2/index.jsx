import PropTypes from 'prop-types';
import React, { memo, useState, useCallback } from 'react';
import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';
import HomeSectionV2Wrapper from './style';

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  const tabNames = infoData.dest_address?.map((item) => item.name);
  const [tabName, settabName] = useState(tabNames[0]);

  const tabClickHandle = useCallback((name) => {
    settabName(name);
  }, []);
  return (
    <HomeSectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms list={infoData.dest_list?.[tabName]} itemWidth="33.3333%" />
      <SectionFooter name={tabName} />
    </HomeSectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.shape(),
};
HomeSectionV2.defaultProps = {
  infoData: {},
};

export default HomeSectionV2;
