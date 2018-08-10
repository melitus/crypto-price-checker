import React from 'react';
import ReactDOM from 'react-dom';

import Main from './routes/main';
import './index.css';

const App = () => {
  return (
    <Main />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
