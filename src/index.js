import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles/main.scss';

const title = 'My Minimal React Webcpack Badssbcsdsdel dsdsSetup';

ReactDOM.render(
  <div>{title}
  <h1>Test</h1>
  </div>,
  document.getElementById('app')
);

module.hot.accept();