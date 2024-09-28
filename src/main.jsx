import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router>
            <Routes>
              <Route path='/' element={<App/>}>
                <Route index path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
        </Router>
    </React.StrictMode>
)
