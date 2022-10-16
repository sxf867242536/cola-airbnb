import AirbnbRequest from '..';

export default function getHomeGoodPriceData() {
  return AirbnbRequest.get({
    url: '/home/goodprice',
  });
}
