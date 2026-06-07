import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import SpeedInsightsLoader from './components/SpeedInsightsLoader.jsx';
import { AppProvider } from './contexts/AppContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
      <SpeedInsightsLoader />
    </AppProvider>
  </StrictMode>
);
