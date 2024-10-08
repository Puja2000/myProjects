import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { WeatherContextProvider } from './components/Context/weatherContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    < WeatherContextProvider >
       <App />
    </WeatherContextProvider>
  </React.StrictMode>
)
