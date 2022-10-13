import React, { memo, useEffect, useState } from 'react';
import AirbnbRequest from '@/services';

const Home = memo(() => {
  const [highScore, setHighScore] = useState({});
  useEffect(() => {
    AirbnbRequest.get({ url: '/home/highscore' }).then((res) => {
      setHighScore(res);
    });
  }, []);

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore?.list?.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
});

export default Home;
