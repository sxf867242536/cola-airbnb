import IconLogo from '@/assets/svg/icon_logo';
import React, { memo } from 'react';
import LeftWrapper from './styled';

const HeaderLeft = memo(() => (
  <LeftWrapper>
    <div className="logo"><IconLogo /></div>
  </LeftWrapper>
));

export default HeaderLeft;
