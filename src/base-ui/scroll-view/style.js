import styled from 'styled-components';

const ScrollViewWrapper = styled.div`
  overflow: hidden;
  .scroll-content {
    position: relative;
    display: flex;
    transition: transform 250ms ease;
  }
`;
export default ScrollViewWrapper;
