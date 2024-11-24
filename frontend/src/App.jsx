import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import ImagePage from './pages/ImagePage';
import TextPage from './pages/TextPage';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <header className="navbar">
        <NavLink to="/video" className="nav-item">Video Detection</NavLink>
        <NavLink to="/image" className="nav-item">Image Detection</NavLink>
        <NavLink to="/text" className="nav-item">Text Detection</NavLink>
      </header>
      <main className="content">
        <Routes>
          <Route path="/video" element={<VideoPage />} />
          <Route path="/image" element={<ImagePage />} />
          <Route path="/text" element={<TextPage />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Fake Media Detection</p>
      </footer>
    </div>
  </Router>
);

export default App;
