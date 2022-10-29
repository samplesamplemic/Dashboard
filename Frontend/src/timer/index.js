import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderTimer from "./RenderTimer";
import "./style/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RenderTimer />
  </React.StrictMode>
);
