import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import TeamProvider from './context/TeamContext.jsx'
import './index.css'
import ErrorBoundary
from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <ErrorBoundary>

    <TeamProvider>

      <App />

    </TeamProvider>

  </ErrorBoundary>

</BrowserRouter>
)