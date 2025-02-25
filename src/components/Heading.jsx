import React from 'react';
import { Link } from 'react-router-dom';
import './Heading.css';


export default function Heading() { 
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/lightmodedarkmode">Light Mode & Dark Mode</Link></li>
        <li><Link to="/textsizechanger">Text Size Changer</Link></li>
      </ul>
    </nav>
  );
}
