import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mint from './MintNFT';
import Vote from './vote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Mint /> */}
    <Vote />
  </React.StrictMode>
);
