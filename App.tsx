import React from 'react';
import {RecoilRoot} from 'recoil';
import AuthApp from './src/screens/AuthApp';
import Counter from './src/screens/Counter';

function App() {
  return (
    <RecoilRoot>
      <AuthApp />
    </RecoilRoot>
  );
}

export default App;
