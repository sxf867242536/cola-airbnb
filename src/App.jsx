import React, { memo } from 'react';
import Home from 'components/home';

const App = memo(() => (
  <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Home />
  </div>
));

export default App;
