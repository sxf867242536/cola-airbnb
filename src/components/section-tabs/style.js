import styled from 'styled-components';

const SectionTabsWrapper = styled.div`
  .items {
    display: flex;
    width: 100%;
    .item {
      flex: 1;
      box-sizing: border-box;
      flex-shrink: 0;
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
  }
`;
export default SectionTabsWrapper;
