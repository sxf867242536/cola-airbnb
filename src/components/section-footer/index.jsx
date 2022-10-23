import PropTypes from 'prop-types';

import React, { memo } from 'react';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import SectionFooterWrapper from './style';

const SectionFooter = memo((props) => {
  const { name } = props;
  let showMessage = '显示全部';
  if (name) {
    showMessage = `显示更多${name}房源`;
  }
  return (
    <SectionFooterWrapper color={name ? '#00848a' : '#000'}>
      <div className="info">
        <span className="text">{showMessage}</span>
        <span className="icon">
          <IconArrowRight />
        </span>
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
};
SectionFooter.defaultProps = {
  name: '显示全部',
};

export default SectionFooter;
