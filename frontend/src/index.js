import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mint from './pages/mintNFT';
import Vote from './pages/vote';
import Auth from './pages/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth />
    <Mint />
    <br /> <br /> <br />
    <Vote />
  </React.StrictMode>
);
