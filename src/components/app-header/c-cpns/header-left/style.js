import styled from 'styled-components';

const LeftWrapper = styled.div`
  flex: 1;
  color: ${(props) => props.theme.color.primaryColor};
  display: flex;
  align-items: center;
  .logo {
    cursor: pointer;
    margin-left: 24px;
  }
`;
export default LeftWrapper;
