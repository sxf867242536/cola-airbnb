import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  fetchHomeDiscountDataAction,
  fetchHomeGoodPriceDataAction,
  fetchHomeHighScoreDataAction,
  fetchHomeHotRecommenddestAction,
} from '@/store/modules/home';
import isEmptyObject from '@/uitls';
import HomeBanner from './c-cnps/home-banner';
import HomeWrapper from './style';
import HomeSectionV1 from './c-cnps/home-section-v1';
import HomeSectionV2 from './c-cnps/home-section-v2';

const Home = memo(() => {
  const {
    goodPriceInfo, highScoreInfo, discountInfo, hotRecommenddestInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommenddestInfo: state.home.hotRecommenddestInfo,
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
  useEffect(() => {
    dispatch(fetchHomeHotRecommenddestAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />

      <div className="content">
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObject(hotRecommenddestInfo) && <HomeSectionV2 infoData={hotRecommenddestInfo} />}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
