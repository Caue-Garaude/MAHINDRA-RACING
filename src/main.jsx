import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import News from './News.jsx';
import Teams from './Teams.jsx';
import Tickets from './Tickets.jsx';
import Races from './Races.jsx';
import Header from './Header.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Define Home como a página inicial */}
          <Route index element={<Home/>}/>
          {/* Rotas para o Header */}
          <Route>

            <Route path="/news" element={<News />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/races" element={<Races />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
