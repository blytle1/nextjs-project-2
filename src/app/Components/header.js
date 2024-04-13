import React from 'react';
import styles from './header.modules.css';   

function Header() {
  return (
    <nav className="nav">
      <h1 className="site-title">Welcome To The Assistive Technology Assessment Tool</h1>
        <ul>
          <li className='active'><a href="/">Home</a></li>
          <li><a href="/assessment">Assessment Tool</a></li>
          <li><a href="/TechnologyTools">Assistive Technology Tools</a></li>
          <li><a href="/ContactInfo">Contact Information</a></li>  
        </ul>
    </nav>
  );
}

export default Header;