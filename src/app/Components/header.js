'use client';
import React from 'react';
import styles from './header.modules.css';

function Header() {
  // Function to determine if a given link is active
  const isActive = (pathname) => {
    return window.location.pathname === pathname;
  };

  return (
    <nav className="nav">
      <h1 className="site-title">Welcome To The Assistive Technology Assessment Tool</h1>
      <ul>
        <li className={isActive("/") ? 'active' : ''}><a href="/">Home</a></li>
        <li className={isActive("/assessment") ? 'active' : ''}><a href="/assessment">Assessment Tool</a></li>
        <li className={isActive("/TechnologyTools") ? 'active' : ''}><a href="/TechnologyTools">Assistive Technology Tools</a></li>
        <li className={isActive("/ContactInfo") ? 'active' : ''}><a href="/ContactInfo">Contact Information</a></li>  
      </ul>
    </nav>
  );
}

export default Header;
