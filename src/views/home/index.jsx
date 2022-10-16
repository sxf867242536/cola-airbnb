import { fetchHomeDataAction } from '@/store/modules/home';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './c-cnps/home-banner';
import HomeWrapper from './style';

const Home = memo(() => {
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
  }), shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <h2>{goodPriceInfo.title}</h2>
        <ul>
          {goodPriceInfo.list?.map((item) => <li>{item.name}</li>)}
        </ul>
      </div>
    </HomeWrapper>
  );
});

export default Home;
