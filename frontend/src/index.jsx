import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/home' element={ <Home /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
)
