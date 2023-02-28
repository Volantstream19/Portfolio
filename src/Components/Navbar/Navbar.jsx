import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/about">
        <button className="navbar-button">About</button>
      </Link>
      <Link to="/projects">
        <button className="navbar-button">Projects</button>
      </Link>
      <Link to="/contact">
        <button className="navbar-button">Contact</button>
      </Link>
      <Link to="/resume" href="/jackson-kelly.png" target="_blank">
        <button className="navbar-button">Resume</button>
      </Link>
    </nav>
  );
}
