import PropTypes from 'prop-types';
import React, {
  memo, useState, useEffect, useRef,
} from 'react';
import ScrollViewWrapper from './style';

const ScrollView = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();
  // const [showLeftBtn, setShowLeftBtn] = useState(false);
  const scrollContentRef = useRef();
  useEffect(() => {
    const { scrollWidth, clientWidth } = scrollContentRef.current;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRightBtn(totalDistance > 0);
  }, [props.children]);
  function rightClickHandle() {
    const newPosIndex = posIndex + 1;
    const { offsetLeft } = scrollContentRef.current.children[newPosIndex];
    scrollContentRef.current.style.transform = `translate(-${offsetLeft}px)`;
    setPosIndex(newPosIndex);
    setShowRightBtn(totalDistanceRef.current > offsetLeft);
  }
  return (
    <ScrollViewWrapper>
      {/* {showLeftBtn && <button type="button">left btn</button>} */}
      {showRightBtn && (
        <button type="button" onClick={rightClickHandle} onKeyDown={rightClickHandle}>
          right btn
        </button>
      )}
      <div className="scroll-content" ref={scrollContentRef}>
        {props.children}
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {
  children: PropTypes.node,
};
ScrollView.defaultProps = {
  children: memo(() => <div>index</div>),
};

export default ScrollView;
