import styled from 'styled-components';

const SectionFooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 22px;
    &:hover {
      text-decoration: underline;
    }
    color: ${(props) => props.color};
    .text {
      font-weight: 700;
      font-size: 17px;
      line-height: 22px;
      margin-right: 6px;

      display: inline;
    }
    .icon {
      display: inline;
      svg {
        display: inline;
        line-height: 22px;
      }
    }
  }
`;
export default SectionFooterWrapper;
