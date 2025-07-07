import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

function App() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'var(--text-heading)',
            marginRight: '1rem'
          }}>
            {menuOpen ? '✖' : '☰'}
          </button>
          <ul className="nav-links" style={{
            display: menuOpen ? 'flex' : '',
            flexDirection: menuOpen ? 'column' : '',
            position: menuOpen ? 'absolute' : '',
            top: menuOpen ? '100%' : '',
            left: menuOpen ? 0 : '',
            width: menuOpen ? '100%' : '',
            background: menuOpen ? 'var(--bg-card)' : '',
            boxShadow: menuOpen ? '0 4px 24px rgba(80,80,180,0.07)' : '',
            zIndex: menuOpen ? 200 : '',
            padding: menuOpen ? '1rem 0' : '',
            gap: menuOpen ? '1.5rem' : ''
          }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{
            marginLeft: '2rem',
            fontSize: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-heading)'
          }}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer>
          &copy; {new Date().getFullYear()} Henish Anilbhai Viradiya &mdash; Portfolio
        </footer>
      </div>
    </Router>
  );
}

export default App;
