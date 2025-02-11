import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import dotenv from 'dotenv';
import App from './App';

dotenv.config();
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
