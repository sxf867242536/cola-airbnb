import PropTypes from 'prop-types';
import React, { memo } from 'react';
import ScrollViewWrapper from './style';

const ScrollView = memo((props) => (
  <ScrollViewWrapper>
    <div>left btn</div>
    <div>right btn</div>
    <div className="scroll-content">{props.children}</div>
  </ScrollViewWrapper>
));

ScrollView.propTypes = {
  children: PropTypes.element,
};
ScrollView.defaultProps = {
  children: <div />,
};

export default ScrollView;
