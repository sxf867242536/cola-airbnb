import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import SectionTabsWrapper from './style';

const SectionTabs = memo((props) => {
  const { tabNames, tabClick } = props;
  const [currentIndex, setcurrentIndex] = useState(0);
  function itemClickHandle(index, name) {
    setcurrentIndex(index);
    tabClick(name);
  }
  return (
    <SectionTabsWrapper>
      <div className="items">
        {tabNames.map((item, index) => (
          <div
            className={classNames('item', { active: index === currentIndex })}
            key={item}
            onClick={() => itemClickHandle(index, item)}
            onKeyDown={() => itemClickHandle(index, item)}
          >
            {item}
          </div>
        ))}
      </div>
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.arrayOf(PropTypes.string),
  tabClick: PropTypes.func,
};
SectionTabs.defaultProps = {
  tabNames: [],
  tabClick() {},
};
export default SectionTabs;
