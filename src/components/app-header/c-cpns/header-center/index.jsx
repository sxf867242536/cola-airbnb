import React, { memo } from 'react';
import IconSearch from '@/assets/svg/icon_search';
import CenterWrapper from './style';

const HeaderCenter = memo(() => (
  <CenterWrapper>
    <div className="search-bar">
      <div className="text">搜索房源和体验</div>
      <div className="icon">
        <IconSearch />
      </div>
    </div>
  </CenterWrapper>
));

export default HeaderCenter;
