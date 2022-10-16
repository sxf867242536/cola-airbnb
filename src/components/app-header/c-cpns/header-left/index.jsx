import IconLogo from '@/assets/svg/icon_logo';
import React, { memo } from 'react';
import LeftWrapper from './styled';

const HeaderLeft = memo(() => (
  <LeftWrapper>
    <IconLogo />
  </LeftWrapper>
));

export default HeaderLeft;
