import React from 'react';
import { createRoot } from 'react-dom/client';
import WindowFrame from '@misc/window/components/WindowFrame';
import Application from '@components/Application';
import './App.css';

// Say something
console.log('[HSS] : Renderer execution started');

// Application to Render
const app = (
  <WindowFrame title='HSS' platform='windows'>
    <Application />
  </WindowFrame>
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);