import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './styles/index.css';
import './styles/projects-sprite.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
