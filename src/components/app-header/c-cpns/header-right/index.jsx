import IconAvatar from '@/assets/svg/icon_avatar';
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';
import React, { memo } from 'react';
import RightWrapper from './styled';

const HeaderRight = memo(() => (
  <RightWrapper>
    <div className="btns">
      <span className="btn">登陆</span>
      <span className="btn">注册</span>
      <span className="btn">
        <IconGlobal />
      </span>
    </div>
    <div className="profile">
      <IconMenu />
      <IconAvatar />
    </div>
  </RightWrapper>
));

export default HeaderRight;
