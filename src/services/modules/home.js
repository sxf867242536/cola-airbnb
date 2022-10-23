import AirbnbRequest from '..';

export function getHomeGoodPriceData() {
  return AirbnbRequest.get({
    url: '/home/goodprice',
  });
}
export function getHomeHighScoreData() {
  return AirbnbRequest.get({
    url: '/home/highscore',
  });
}
export function getHomeDiscountData() {
  return AirbnbRequest.get({
    url: '/home/discount',
  });
}
export function getHomeHotRecommenddest() {
  return AirbnbRequest.get({
    url: '/home/hotrecommenddest',
  });
}
