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
  .btns{
    display: flex;
    align-items: center;
    .btn{
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      &:hover{
        background-color: #f5f5f5;
      }
    }
  }
  .profile{
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
  }
`;
export default RightWrapper;
