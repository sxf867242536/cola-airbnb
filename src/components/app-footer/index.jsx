import React, { memo } from 'react';
import footerData from '@/assets/data/footer.json';
import AppFooterWrapper from './style';

const AppFooter = memo(() => (
  <AppFooterWrapper>
    <div className="footer-items">
      {footerData.map((item) => (
        <div className="footer-item" key={item.name}>
          <div className="header">{item.name}</div>
          <ul>
            {item.list.map((url) => (
              <li key={url}>
                <a href="www.baidu.com">{url}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </AppFooterWrapper>
));

export default AppFooter;
