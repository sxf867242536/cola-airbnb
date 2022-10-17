import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import SectionHeader from '@/components/section-header';
import { fetchHomeDataAction } from '@/store/modules/home';
import SectionRooms from '@/components/section-rooms';
import HomeBanner from './c-cnps/home-banner';
import HomeWrapper from './style';

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="goodPrice">
          <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle} />
          <SectionRooms list={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
