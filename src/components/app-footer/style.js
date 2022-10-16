import styled from 'styled-components';

const AppFooterWrapper = styled.div`
  padding: 24px 48px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  .footer-items {
    width: 1032px;
    margin: 0 auto;
    display: flex;
  }
  .footer-item {
    flex: 1;
    .header {
      margin-bottom: 16px;
      font-weight: 600;
    }
    li {
      color: #767676;
    }
  }
`;
export default AppFooterWrapper;
