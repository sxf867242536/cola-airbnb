import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import RoomItem from '@/components/room-item';
import SectionHeader from '@/components/section-header';
import { fetchHomeDataAction } from '@/store/modules/home';
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
        </div>
        <ul className="room-list">
          {goodPriceInfo.list?.slice(0, 8).map((item) => (
            <RoomItem itemData={item} key={item.id} />
          ))}
        </ul>
      </div>
    </HomeWrapper>
  );
});

export default Home;
