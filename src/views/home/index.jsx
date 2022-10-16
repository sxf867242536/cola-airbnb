import React, { memo } from 'react';
import HomeBanner from './c-cnps/home-banner';
import HomeWrapper from './style';

const Home = memo(() => (
  <HomeWrapper>
    <HomeBanner />
  </HomeWrapper>
));

export default Home;
