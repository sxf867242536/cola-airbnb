import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import SectionHeader from '../section-header';
import SectionRooms from '../section-rooms';
import SectionTabsWrapper from './style';

const SectionTabs = memo((props) => {
  const { infoData, tabNames, itemWidth } = props;
  const [currentIndex, setcurrentIndex] = useState(0);
  function itemClickHandle(index) {
    setcurrentIndex(index);
  }
  return (
    <SectionTabsWrapper>
      <div className="items">
        {tabNames.map((item, index) => (
          <div
            className={classNames('item', { active: index === currentIndex })}
            key={item}
            onClick={() => itemClickHandle(index)}
            onKeyDown={() => itemClickHandle(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms list={infoData.dest_list?.[tabNames[currentIndex]]} itemWidth={itemWidth} />
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  infoData: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    dest_list: PropTypes.arrayOf({}),
  }),
  itemWidth: PropTypes.string,
  tabNames: PropTypes.arrayOf(PropTypes.string),
};
SectionTabs.defaultProps = {
  infoData: {},
  itemWidth: '33.3333%',
  tabNames: [],
};
export default SectionTabs;
