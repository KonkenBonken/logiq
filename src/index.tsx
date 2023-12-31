import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './Main';
import './styles/index.scss';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <StrictMode>
    <App />
  </StrictMode>
);
