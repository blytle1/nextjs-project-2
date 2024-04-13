// components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Welcome To The Assistive Technology Assessment Tool</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/assessment">Assessment Tool</a></li>
          <li><a href="/TechnologyTools">Assistive Technology Tools</a></li>
          <li><a href="/ContactInfo">Contact Information</a></li>  
        </ul>
      </nav>
    </header>
  );
}

export default Header;