import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import Store from './app/Store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
    </Router>
    </Provider>
  </React.StrictMode>,
)
