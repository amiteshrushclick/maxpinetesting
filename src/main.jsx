import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './components/AppContext';


import App from './App.jsx'
import SmoothScroll from './pages/SmoothScroll.jsx'

// 🔹 Initialize GA with your Measurement ID
ReactGA.initialize("G-7ZCDH4GB22");


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SmoothScroll> */}
    <Router>
      <AppProvider>

    <App />
      </AppProvider>
    {/* </SmoothScroll> */}
    </Router>
  </StrictMode>,
)
