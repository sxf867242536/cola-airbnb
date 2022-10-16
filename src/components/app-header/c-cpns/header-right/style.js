import styled from 'styled-components';

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.textColor.primaryColor};
  margin-right: 24px;
  .btns {
    display: flex;
    align-items: center;
    .btn {
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    color: #999;
    ${(props) => props.theme.mixin.boxShdow}
    .panel {
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
      border-radius: 10px;
      color: #666;
      .top,
      .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
export default RightWrapper;
