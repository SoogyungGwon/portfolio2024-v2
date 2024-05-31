import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { APP_FOLDER_NAME } from './globals/globalVariables';

// Import pages
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={`/${APP_FOLDER_NAME}`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
