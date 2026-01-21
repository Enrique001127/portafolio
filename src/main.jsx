import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AppProvider } from './contexts/AppContext';
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
      <SpeedInsights />
    </AppProvider>
  </StrictMode>
);
