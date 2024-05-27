/* File: Layout.jsx
Student Name: Himal Bagga
Student Id: 301340155
Date: 26 May, 2024 */


import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <>
        <img id='lyimg' src="../src/assets/logo.jpg" alt="" />
      <h1>My Portfolio</h1>
        
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Services</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}

