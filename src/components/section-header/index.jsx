import PropTypes from 'prop-types';
import React, { memo } from 'react';
import SectinHeaderWrapper from './style';

const SectionHeader = memo((props) => {
  const { title, subtitle } = props;
  return (
    <SectinHeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </SectinHeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
SectionHeader.defaultProps = {
  title: '',
  subtitle: '',
};
export default SectionHeader;
