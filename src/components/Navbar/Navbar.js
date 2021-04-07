import React from 'react';
import { A } from 'hookrouter';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="header-box">
      <div className="navbar-box">
        <h1 className="name-title">Adam Figueroa</h1>
        <nav className="navbar">
          <ul>
            <li>
              <A href="/">About</A>
            </li>
            <li>
              <A href="/projects">Projects</A>
            </li>
            <li>
              <A href="/contact">Contact</A>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
