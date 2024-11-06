import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './styles/index.css';
import './styles/home.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/contact.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
