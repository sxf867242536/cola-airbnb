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
