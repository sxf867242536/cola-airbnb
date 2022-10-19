import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  fetchHomeDiscountDataAction,
  fetchHomeGoodPriceDataAction,
  fetchHomeHighScoreDataAction,
} from '@/store/modules/home';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import HomeBanner from './c-cnps/home-banner';
import HomeWrapper from './style';
import HomeSectionV1 from './c-cnps/home-section-v1';

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeGoodPriceDataAction());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchHomeHighScoreDataAction());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchHomeDiscountDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
        <div className="discount">
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionRooms list={discountInfo.dest_list?.['成都']} itemWidth="33.33333%" />
        </div>
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
