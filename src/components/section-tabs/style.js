import styled from 'styled-components';

const SectionTabsWrapper = styled.div`
  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #d8d8d8;
      background-color: ${(props) => props.theme.color.secendaryColor};
    }
  }
`;
export default SectionTabsWrapper;
