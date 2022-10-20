import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  fetchHomeDiscountDataAction,
  fetchHomeGoodPriceDataAction,
  fetchHomeHighScoreDataAction,
} from '@/store/modules/home';
import SectionTabs from '@/components/section-tabs';
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
  const tabNames = discountInfo.dest_address?.map((item) => item.name);
  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
        <HomeSectionV1 infoData={goodPriceInfo} />
        <SectionTabs infoData={discountInfo} itemWidth="33.3333%" tabNames={tabNames} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
